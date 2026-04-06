import L from "leaflet";

type Hackathon = {
  id: string;
  title: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  url: string;
  shortDescription: string;
  status: string;
  dateLabel: string;
};

function init() {
  const el = document.getElementById("hackathon-map-root");
  if (!el) return;

  const raw = el.getAttribute("data-hackathons");
  if (!raw) return;

  let hackathons: Hackathon[];
  try {
    hackathons = JSON.parse(raw) as Hackathon[];
  } catch {
    return;
  }

  if (!hackathons?.length) return;

  const map = L.map(el, {
    scrollWheelZoom: false,
    zoomControl: true,
    attributionControl: true,
  });

  const container = map.getContainer();
  container.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      if (!e.ctrlKey) {
        return;
      }
      e.preventDefault();
      const zoom = map.getZoom();
      const delta = e.deltaY;
      const step = delta > 0 ? -1 : 1;
      const next = Math.min(
        map.getMaxZoom(),
        Math.max(map.getMinZoom(), zoom + step),
      );
      map.setZoom(next, { animate: true });
    },
    { passive: false },
  );

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    },
  ).addTo(map);

  const bounds = L.latLngBounds([]);

  const escapeHtml = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const pinWidth = 32;
  const pinHeight = 42;
  const pinHtml = (title: string, index: number) => {
    const safe = escapeHtml(title);
    const gradId = `hm-pin-grad-${index}`;
    return `<div class="hm-pin" title="${safe}" role="img" aria-label="${safe}">
  <svg class="hm-pin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="${pinWidth}" height="${pinHeight}" aria-hidden="true">
    <defs>
      <linearGradient id="${gradId}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#ff4d4d"/>
        <stop offset="100%" style="stop-color:#b91c1c"/>
      </linearGradient>
    </defs>
    <path fill="url(#${gradId})" stroke="#7f1d1d" stroke-width="1"
      d="M16 0C9.4 0 4 5.2 4 11.5c0 8.2 12 28.5 12 28.5s12-20.3 12-28.5C28 5.2 22.6 0 16 0z"/>
    <circle cx="16" cy="12" r="4.5" fill="#fff"/>
  </svg>
</div>`;
  };

  hackathons.forEach((h, index) => {
    const latlng: L.LatLngExpression = [h.lat, h.lng];
    bounds.extend(latlng);

    const icon = L.divIcon({
      className: "hm-marker-wrap",
      html: pinHtml(h.title, index),
      iconSize: [pinWidth, pinHeight],
      iconAnchor: [pinWidth / 2, pinHeight],
      popupAnchor: [0, -pinHeight - 4],
    });

    const popup = `<div class="hm-popup font-sans"><div class="hm-popup-title">${escapeHtml(h.title)}</div><div class="hm-popup-meta">${escapeHtml(h.city)}, ${escapeHtml(h.country)}</div><a class="hm-popup-link" href="${escapeHtml(h.url)}" target="_blank" rel="noopener noreferrer">Event site →</a></div>`;

    L.marker(latlng, { icon }).addTo(map).bindPopup(popup);
  });

  if (bounds.isValid()) {
    map.fitBounds(bounds.pad(0.35));
  } else {
    map.setView([20, 0], 2);
  }

  setTimeout(() => map.invalidateSize(), 200);
  window.addEventListener("resize", () => map.invalidateSize());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
