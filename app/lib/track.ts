"use client";

/**
 * Wrapper unico per gli eventi di tracciamento della landing.
 * Oggi loggano in console; collegare qui Meta Pixel / GTM / GA4
 * quando gli ID saranno disponibili (placeholder sotto).
 */
type TrackPayload = Record<string, string | number | boolean | undefined>;

export function track(event: string, payload: TrackPayload = {}) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[track] ${event}`, payload);
  }

  // Placeholder Meta Pixel — sostituire con il Pixel ID reale.
  // if (typeof window !== "undefined" && (window as any).fbq) {
  //   (window as any).fbq("trackCustom", event, payload);
  // }

  // Placeholder GTM / GA4 — sostituire con il container ID reale.
  // if (typeof window !== "undefined" && (window as any).dataLayer) {
  //   (window as any).dataLayer.push({ event, ...payload });
  // }
}

export const TRACK_EVENTS = {
  CTA_PRIMARY_CLICK: "cta_primary_click",
  CTA_SECONDARY_CLICK: "cta_secondary_click",
  FORM_SUBMIT: "form_submit",
  SCROLL_50: "scroll_50",
  SCROLL_90: "scroll_90",
} as const;
