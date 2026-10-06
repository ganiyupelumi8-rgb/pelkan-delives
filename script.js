/**
 * Pelkan Delives - Market Sourcing & Delivery, Kano
 * Lightweight zero-dependency JavaScript engine
 * WhatsApp Routing target: 2348150565192
 * Customer Support: hellopelkan@gmail.com
 */

const WHATSAPP_PHONE = '2348150565192';
const SUPPORT_EMAIL = 'hellopelkan@gmail.com';

// State
let currentService = 'source'; // 'source' (Buy & Source) or 'dispatch' (Pick Up & Deliver)
let currentUrgency = 'pooled';  // 'pooled' or 'express'
let currentLanguage = 'en';     // 'en', 'ha', 'ig', 'yo', 'pcm'

// English Master Dictionary
const ENGLISH_DICTIONARY = {
  top_notice: '📍 Now taking orders across Kano · Shopping, sourcing & package delivery · Mon-Sat 8am-6pm, Sun 12pm-7pm',
  brand_tagline: 'Market Sourcing & Delivery, Kano',
  hero_pill: '🇳🇬 Kano market sourcing & delivery · No app needed',
  hero_title_1: 'We shop the markets & stores for you.',
  hero_title_2: 'We deliver across Kano.',
  hero_sub: 'From Kantin Kwari, Sabon Gari and Farm Center to your nearest supermarket, we buy, package and deliver. You can also send a package anywhere in Kano. Order on WhatsApp. No app, no password.',
  badge_nosignup: '⚡ No sign-up',
  badge_riders: '📸 Photos of your goods',
  badge_whatsapp: '💬 Order on WhatsApp',
  badge_fares: '💰 Fares in ₦',
  service_choose_title: 'Choose Service Type (Zaɓi Aiki)',
  service_choose_hint: 'Tap to switch',
  service_source_title: 'Buy & Source for Me',
  service_source_sub: 'Markets + Supermarkets: Kwari, Sabon Gari, Farm Center, Kurmi, Dawanau & more',
  service_dispatch_title: 'Pick Up & Deliver',
  service_dispatch_sub: 'Send a package anywhere in Kano: parcels, food, documents, goods for your customers',
  service_hint_source: '<strong>🛍️ Market & Store Concierge:</strong> We visit Kantin Kwari, Sabon Gari, Farm Center, or the supermarket you choose, inspect the goods, negotiate where we can, and buy on your behalf. We send you photos before we pay, then deliver to you.',
  service_hint_dispatch: '<strong>📦 Direct Dispatch:</strong> We pick up from your home, shop, or any address in Kano and deliver to the recipient. Good for small businesses sending orders to their buyers.',
  form_header_title: '📝 Dispatch Request Details',
  quick_sample_title: 'Quick Sample Test (Danna don gwada cikawa):',
  chip_sample_kwari: '🛍️ Kwari Atamfa Run',
  chip_sample_buk: '📦 BUK Old to New Campus',
  chip_sample_dawanau: '🌾 Dawanau Grain Bulk',
  label_name: 'Your Full Name (Sunanka)',
  name_placeholder: 'e.g. Ibrahim Sani / Fatima Bello',
  label_phone: 'WhatsApp Phone (Lambar Waya)',
  phone_placeholder: 'e.g. 08012345678 or 070...',
  label_pickup_source: 'Market or Store to Buy From',
  label_pickup_dispatch: 'Pickup Location in Kano',
  label_pickup_hint: 'Kano State Location',
  pickup_landmark_label: 'Specific Pickup Landmark, Stall # or Gate',
  pickup_landmark_placeholder: 'e.g. Line 3 Shop 14, Near First Bank Gate, or specific plaza name',
  label_dropoff: 'Drop-off Destination in Kano',
  label_dropoff_hint: 'Where should we deliver?',
  dropoff_landmark_label: 'Specific Drop-off Landmark, House # or Street',
  dropoff_landmark_placeholder: 'e.g. Opposite Central Mosque, House 15, Near Water Board, Hostel A Room 12',
  label_details_source: 'Shopping List & Sourcing Instructions',
  label_details_dispatch: 'Package Description & Size',
  details_placeholder_source: 'List items with details (e.g. 2 bundles Super English Wax from Kwari Line 4, 1 tin pure shea butter, budget, or phone number of the stall owner)',
  details_placeholder_dispatch: 'Describe package (e.g. 1 Medium food container flask, sealed document envelope, laptop bag, carton of clothes, approx 3kg)',
  label_timing: 'Preferred Delivery Speed (Saurin Aikawa)',
  timing_pooled_title: '🤝 Pooled',
  timing_pooled_badge: 'Best value',
  timing_pooled_sub: 'Grouped runs. Order by 11am: about 3pm. Order by 2pm: about 6pm. Later orders: next morning.',
  timing_express_title: '⚡ Express',
  timing_express_badge: 'Fastest',
  timing_express_sub: 'Your own dedicated run. Starts within about 1 hour, usually 2-3 hours. Hard-to-find items take longer.',
  rate_label: 'Estimated delivery fare',
  rate_subtext: 'Base local fare estimation (Final fare agreed on WhatsApp)',
  btn_submit_text: 'Get Estimate via WhatsApp 💬',
  submit_subtext: '⚡ Opens WhatsApp directly with your formatted details ready to send.',
  preview_header_title: '👁️ WhatsApp Dispatch Template Preview',
  btn_copy: '📋 Copy Message',
  trust_1_title: 'Photos before we pay',
  trust_1_sub: 'We send you photos of the goods and the price before we buy.',
  trust_2_title: 'No hidden markups',
  trust_2_sub: 'You pay the shop price. Our fee is shown separately.',
  trust_3_title: 'No app needed',
  trust_3_sub: 'No downloads, no password. Everything happens on WhatsApp.',
  routes_title: '📍 Sample delivery fares (before sourcing fee)',
  how_heading: 'How Pelkan Delives Works (Yadda Yake Aiki)',
  step_1_title: 'Fill the form',
  step_1_desc: 'Tell us where to buy or pick up from, where to deliver, and what you need.',
  step_2_title: 'Send on WhatsApp',
  step_2_desc: 'One tap sends your order to 0815 056 5192. Or copy the message and paste it yourself.',
  step_3_title: 'We shop and deliver',
  step_3_desc: 'We confirm the price on WhatsApp. Once your payment is confirmed, we shop, send photos of your goods, then deliver.',
  support_title: 'Customer Support & Feedback (Maganar Abokin Ciniki)',
  support_sub: 'Have a complaint, suggestion, or opinion? We want to hear from you directly.',
  support_desc: 'Whether your order went perfectly, ran late, or you have an idea to improve our service, please tell us.',
  support_email_btn: '✉️ Email Us: hellopelkan@gmail.com',
  support_wa_btn: '💬 WhatsApp Support & Feedback',
  faq_heading: 'Frequently Asked Questions (Tambayoyin Da Aka Saba Yi)',
  hours_hours: '🕗 Mon-Sat, 8am-6pm',
  hours_after: '🌙 After closing until 9pm: +₦1,000 and up',
  hours_sunday: 'Sun: 12pm-7pm',
  rate_subtext_source: 'Delivery only. The sourcing fee (from ₦500) is extra. Final price is agreed on WhatsApp.',
  rate_subtext_dispatch: 'Final price is agreed on WhatsApp.'
};

// Nigerian Pidgin Manual Translation Dictionary (Specialized Hybrid Switcher)
const PIDGIN_DICTIONARY = {
  top_notice: '📍 We don open for all Kano · Shopping, sourcing & package delivery · Mon-Sat 8am-6pm, Sun 12pm-7pm',
  brand_tagline: 'Market Buying & Delivery, Kano',
  hero_pill: '🇳🇬 Kano market buying & delivery · No app needed',
  hero_title_1: 'We go shop markets & stores for you.',
  hero_title_2: 'We go deliver am for Kano.',
  hero_sub: 'From Kantin Kwari, Sabon Gari and Farm Center to your nearest supermarket, we go buy am, pack am and deliver am. You fit also send package anywhere for Kano. Order for WhatsApp. No app, no password.',
  badge_nosignup: '⚡ No sign-up',
  badge_riders: '📸 Photo of your goods',
  badge_whatsapp: '💬 Order for WhatsApp',
  badge_fares: '💰 Price for ₦',
  service_choose_title: 'Choose Wetyn You Want Us To Do',
  service_choose_hint: 'Tap to change',
  service_source_title: 'Buy & Source for Me',
  service_source_sub: 'Markets + Supermarkets: Kwari, Sabon Gari, Farm Center, Kurmi, Dawanau & more',
  service_dispatch_title: 'Pick Up & Deliver Package',
  service_dispatch_sub: 'Send package anywhere for Kano: parcel, food, documents, goods for your customers',
  service_hint_source: '<strong>🛍️ Market & Store Concierge:</strong> We go enter Kantin Kwari, Sabon Gari, Farm Center, or the supermarket you choose, check the goods, bargain where e fit work, and buy am for you. We go send you photo before we pay, then deliver am to you.',
  service_hint_dispatch: '<strong>📦 Direct Dispatch:</strong> We go pick am from your house, shop, or any address for Kano and deliver am give the person wey suppose get am. E good for small business wey wan send order give their buyers.',
  form_header_title: '📝 Wetyn We Go Deliver',
  quick_sample_title: 'Quick Sample Test (Tap to test fill):',
  chip_sample_kwari: '🛍️ Kwari Atamfa Run',
  chip_sample_buk: '📦 BUK Old to New Campus',
  chip_sample_dawanau: '🌾 Dawanau Grain Bulk',
  label_name: 'Your Full Name (Your Name)',
  name_placeholder: 'e.g. Ibrahim Sani / Fatima Bello',
  label_phone: 'WhatsApp Phone (Your Number)',
  phone_placeholder: 'e.g. 08012345678 or 070...',
  label_pickup_source: 'Market or Store Where We Go Buy am',
  label_pickup_dispatch: 'Where We Go Pick am for Kano',
  label_pickup_hint: 'Kano State Location',
  pickup_landmark_label: 'Exact Landmark, Line, Stall # or Gate (If you like)',
  pickup_landmark_placeholder: 'e.g. Line 3 Shop 14, Near First Bank Gate, or plaza name',
  label_dropoff: 'Where We Go Deliver am for Kano',
  label_dropoff_hint: 'Where we go carry am go?',
  dropoff_landmark_label: 'Exact House #, Street or Landmark (If you like)',
  dropoff_landmark_placeholder: 'e.g. Opposite Central Mosque, House 15, Near Water Board, Hostel A Room 12',
  label_details_source: 'Shopping List & Wetyn to Buy',
  label_details_dispatch: 'Package Description & Size (Wetyn dey inside)',
  details_placeholder_source: 'List wetyn you want us to buy with details (e.g. 2 bundles Super English Wax for Kwari Line 4, pure shea butter, your budget, or seller phone number)',
  details_placeholder_dispatch: 'Describe the parcel (e.g. 1 medium food flask, sealed documents, laptop bag, carton of clothes, approx 3kg)',
  label_timing: 'How Quick You Want am? (Delivery Speed)',
  timing_pooled_title: '🤝 Pooled',
  timing_pooled_badge: 'Best price',
  timing_pooled_sub: 'We go group deliveries together. Order before 11am: about 3pm. Order before 2pm: about 6pm. Later orders: next morning.',
  timing_express_title: '⚡ Express',
  timing_express_badge: 'Sharp sharp',
  timing_express_sub: 'Na only your own run. We start within about 1 hour, normally 2-3 hours. Hard-to-find things go take more time.',
  rate_label: 'Estimated delivery price',
  rate_subtext: 'Local price estimation (We go finalize am on WhatsApp)',
  btn_submit_text: 'Get Estimate via WhatsApp 💬',
  submit_subtext: '⚡ E go open WhatsApp directly with all your details ready to send.',
  preview_header_title: '👁️ WhatsApp Dispatch Template Preview',
  btn_copy: '📋 Copy Message',
  trust_1_title: 'Photo before we pay',
  trust_1_sub: 'We go send you photo of the goods and the price before we buy.',
  trust_2_title: 'No hidden markup',
  trust_2_sub: 'You go pay the shop price. Our fee dey separate.',
  trust_3_title: 'No app wahala',
  trust_3_sub: 'No download, no password. Everything dey happen for WhatsApp.',
  routes_title: '📍 Sample delivery prices (before sourcing fee)',
  how_heading: 'How Pelkan Delives Dey Work',
  step_1_title: 'Fill the form',
  step_1_desc: 'Tell us where we go buy or pick am, where we go deliver am, and wetyn you want.',
  step_2_title: 'Send am for WhatsApp',
  step_2_desc: 'One tap go send your order to 0815 056 5192. Or copy the message and paste am yourself.',
  step_3_title: 'We go shop and deliver',
  step_3_desc: 'We go confirm price for WhatsApp. When your payment don land, we go shop, send photo of your goods, then deliver.',
  support_title: 'Customer Support & Feedback',
  support_sub: 'You get complaint, suggestion, or opinion? Tell us direct!',
  support_desc: 'If your order go well, if e delay, or you get idea how we fit improve, abeg tell us.',
  support_email_btn: '✉️ Send Email: hellopelkan@gmail.com',
  support_wa_btn: '💬 WhatsApp Support & Feedback',
  faq_heading: 'Frequently Asked Questions (Questions Wey People Dey Ask)',
  hours_hours: '🕗 Mon-Sat, 8am-6pm',
  hours_after: '🌙 After we close until 9pm: +₦1,000 and above',
  hours_sunday: 'Sun: 12pm-7pm',
  rate_subtext_source: 'Na delivery only. Sourcing fee (from ₦500) dey extra. We go agree final price for WhatsApp.',
  rate_subtext_dispatch: 'We go agree final price for WhatsApp.'
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initServiceToggle();
  initUrgencyToggle();
  initLocationListeners();
  initLocationButtons();
  initPlaceSearch();
  initFormValidationAndSubmission();
  initLivePreview();
  initFaqAccordion();
  initLanguageSwitcher();
});

/**
 * Service Selection Toggle
 */
function initServiceToggle() {
  const cardSource = document.getElementById('card-service-source');
  const cardDispatch = document.getElementById('card-service-dispatch');
  const detailsInput = document.getElementById('parcel-details');

  if (!cardSource || !cardDispatch) return;

  function selectService(type) {
    currentService = type;
    const chips = document.getElementById('market-chips');
    if (chips) chips.style.display = type === 'source' ? 'flex' : 'none';
    const pickupLoc = document.getElementById('pickup-loc-wrap');
    if (pickupLoc) pickupLoc.style.display = type === 'dispatch' ? 'flex' : 'none';
    const isPidgin = currentLanguage === 'pcm';
    const dict = isPidgin ? PIDGIN_DICTIONARY : ENGLISH_DICTIONARY;

    if (type === 'source') {
      cardSource.classList.add('selected');
      cardDispatch.classList.remove('selected');
      cardSource.setAttribute('aria-checked', 'true');
      cardDispatch.setAttribute('aria-checked', 'false');

      updateElementText('label-details', `${dict.label_details_source} <span class="required-dot">*</span>`);
      updateElementText('label-pickup', `${dict.label_pickup_source} <span class="required-dot">*</span>`);
      updateElementText('service-hint-text', dict.service_hint_source);

      if (detailsInput) {
        detailsInput.placeholder = dict.details_placeholder_source;
      }
    } else {
      cardDispatch.classList.add('selected');
      cardSource.classList.remove('selected');
      cardDispatch.setAttribute('aria-checked', 'true');
      cardSource.setAttribute('aria-checked', 'false');

      updateElementText('label-details', `${dict.label_details_dispatch} <span class="required-dot">*</span>`);
      updateElementText('label-pickup', `${dict.label_pickup_dispatch} <span class="required-dot">*</span>`);
      updateElementText('service-hint-text', dict.service_hint_dispatch);

      if (detailsInput) {
        detailsInput.placeholder = dict.details_placeholder_dispatch;
      }
    }

    updateEstimate();
    updateLivePreview();
  }

  cardSource.addEventListener('click', () => selectService('source'));
  cardDispatch.addEventListener('click', () => selectService('dispatch'));
}

/**
 * Urgency / Timing Toggle
 */
function initUrgencyToggle() {
  const cards = document.querySelectorAll('.timing-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      currentUrgency = card.getAttribute('data-timing') || 'pooled';
      updateEstimate();
      updateLivePreview();
    });
  });
}

/**
 * Location Dropdown and Custom Landmark Inputs
 */
function initLocationListeners() {
  const pickupSelect = document.getElementById('pickup-location');
  const dropoffSelect = document.getElementById('dropoff-location');
  const pickupLandmarkWrap = document.getElementById('pickup-landmark-wrap');
  const dropoffLandmarkWrap = document.getElementById('dropoff-landmark-wrap');

  function handleSelect(select, wrap) {
    if (!select || !wrap) return;
    ['input', 'change'].forEach(evt => select.addEventListener(evt, () => {
      wrap.style.display = 'block';
      updateEstimate();
      updateLivePreview();
    }));
  }

  handleSelect(pickupSelect, pickupLandmarkWrap);
  handleSelect(dropoffSelect, dropoffLandmarkWrap);

  const inputsToListen = [
    'customer-name',
    'customer-phone',
    'pickup-location',
    'pickup-landmark',
    'dropoff-location',
    'dropoff-landmark',
    'parcel-details'
  ];

  inputsToListen.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        const group = el.closest('.form-group');
        if (group) group.classList.remove('has-error');
        el.classList.remove('is-invalid');
        updateLivePreview();
      });
    }
  });

  // Character counter
  const details = document.getElementById('parcel-details');
  const counter = document.getElementById('details-counter');
  if (details && counter) {
    details.addEventListener('input', () => {
      counter.textContent = `${details.value.length} characters`;
    });
  }
}

/**
 * Estimate Fare Calculator based on Kano Route pairs
 */
function calculateFareEstimate() {
  const pickup = document.getElementById('pickup-location')?.value || '';
  const dropoff = document.getElementById('dropoff-location')?.value || '';

  if (!pickup || !dropoff) {
    return { min: 800, max: 1500, label: 'Standard Local Rate' };
  }

  let baseMin = 900;
  let baseMax = 1400;

  // Far outer zones (e.g. Wudil, Bichi, Kura, Gaya, Dambatta)
  const isFarOut = (loc) => {
    const farList = ['Wudil', 'Bichi', 'Kura', 'Gaya', 'Dambatta', 'Rano', 'Gwarzo', 'Karaye', 'Tudun Wada', 'Doguwa', 'Albasu'];
    return farList.some(item => loc.includes(item));
  };

  const isDawanau = pickup.includes('Dawanau') || dropoff.includes('Dawanau');
  const isBUKNew = pickup.includes('BUK New') || dropoff.includes('BUK New');
  const isKumbotso = pickup.includes('Kumbotso') || dropoff.includes('Kumbotso');
  const isKwari = pickup.includes('Kwari') || dropoff.includes('Kwari');
  const isSabonGari = pickup.includes('Sabon Gari') || dropoff.includes('Sabon Gari');
  const isFarmCenter = pickup.includes('Farm Center') || dropoff.includes('Farm Center');

  if (isFarOut(pickup) || isFarOut(dropoff)) {
    baseMin = 2200;
    baseMax = 3500;
  } else if (pickup === dropoff && pickup !== 'Other') {
    baseMin = 600;
    baseMax = 900;
  } else if ((isBUKNew && isDawanau) || (isBUKNew && isKumbotso)) {
    baseMin = 1800;
    baseMax = 2600;
  } else if (isBUKNew || isDawanau) {
    baseMin = 1400;
    baseMax = 2000;
  } else if ((isKwari && isSabonGari) || (isFarmCenter && isSabonGari)) {
    baseMin = 800;
    baseMax = 1100;
  } else {
    baseMin = 1000;
    baseMax = 1500;
  }

  // Express modifier
  if (currentUrgency === 'express') {
    baseMin = Math.round(baseMin * 1.3);
    baseMax = Math.round(baseMax * 1.3);
  }

  return {
    min: Math.round(baseMin / 50) * 50,
    max: Math.round(baseMax / 50) * 50,
    label: currentUrgency === 'express' ? 'Express' : 'Pooled'
  };
}

function updateEstimate() {
  const est = calculateFareEstimate();
  const dict = currentLanguage === 'pcm' ? PIDGIN_DICTIONARY : ENGLISH_DICTIONARY;
  const rateDisplay = document.getElementById('est-rate-amount');
  const rateTag = document.getElementById('est-rate-tag');
  const sub = document.querySelector('.rate-subtext');

  if (rateDisplay) {
    rateDisplay.innerHTML = `₦${est.min.toLocaleString()} - <span>₦${est.max.toLocaleString()}</span>`;
  }
  if (rateTag) rateTag.textContent = est.label;
  if (sub) sub.textContent = currentService === 'source' ? dict.rate_subtext_source : dict.rate_subtext_dispatch;
}

/**
 * Format WhatsApp Message Template
 */
function buildWhatsAppMessage() {
  const val = (id) => document.getElementById(id)?.value.trim() || '';
  const name = val('customer-name') || '[Customer Name]';
  const phone = val('customer-phone') || '[Phone Number]';
  const pickup = val('pickup-location') || 'Not entered';
  const pickupLandmark = val('pickup-landmark');
  const dropoff = val('dropoff-location') || 'Not entered';
  const dropoffLandmark = val('dropoff-landmark');
  const pickupPin = document.getElementById('pickup-location')?.dataset.maps || '';
  const dropPin = document.getElementById('dropoff-location')?.dataset.maps || '';
  const details = val('parcel-details') || '[No details entered yet]';
  const wantReceipt = document.getElementById('want-receipt')?.checked;
  const fullLoad = document.getElementById('full-load')?.checked;
  const when = val('when-needed');
  const neededDate = val('needed-date');
  const neededTime = val('needed-time');
  const isSource = currentService === 'source';

  const serviceName = isSource ? '🛍️ Buy & Source for Me (Market Concierge)' : '📦 Pick Up & Deliver';
  const urgencyText = currentUrgency === 'express' ? '⚡ Express' : '🤝 Pooled';
  const est = calculateFareEstimate();

  const lines = [
    `*🔴 PELKAN DELIVES - NEW REQUEST*`,
    `----------------------------------------`,
    `*Service:* ${serviceName}`,
    `*Customer:* ${name}`,
    `*Phone:* ${phone}`,
    ``,
    `*📍 Pickup / Market:* ${pickup}${pickupLandmark ? ` (${pickupLandmark})` : ''}${pickupPin ? `\n*📌 Pickup pin:* ${pickupPin}` : ''}`,
    `*🎯 Drop-off:* ${dropoff}${dropoffLandmark ? ` (${dropoffLandmark})` : ''}${dropPin ? `\n*📌 Drop-off pin:* ${dropPin}` : ''}`,
    ``,
    `*📦 Details / Shopping List:*`,
    `${details}`,
    ``
  ];
  if (isSource) lines.push(`*🧾 Receipt:* ${wantReceipt ? 'Ask for one if the shop gives it' : 'Not required'}`);
  if (fullLoad) lines.push(`*🚚 Load:* FULL LOAD (price quoted on WhatsApp)`);
  if (when) lines.push(`*🌙 When:* ${when}`);
  if (neededDate) lines.push(`*📅 Date:* ${neededDate}`);
  if (neededTime) lines.push(`*⏰ Deadline / best time:* ${neededTime}`);
  lines.push(
    `*⏱️ Speed:* ${urgencyText}`,
    `*💰 Est. delivery fare:* ~₦${est.min.toLocaleString()} - ₦${est.max.toLocaleString()}${isSource ? ' (sourcing fee extra, from ₦500)' : ''}`,
    `----------------------------------------`,
    `_Sent via the Pelkan Delives website_`
  );
  return lines.join('\n');
}

/**
 * "Use my current location" buttons: adds a Google Maps link to the WhatsApp message (no API key needed)
 */
function initLocationButtons() {
  document.querySelectorAll('[data-loc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.loc);
      const status = document.getElementById('status-' + btn.dataset.loc);
      const pcm = currentLanguage === 'pcm';
      const say = (t) => { if (status) status.textContent = t; };

      if (!navigator.geolocation) {
        say(pcm ? 'This phone no support location. Type the place or send pin for WhatsApp.' : 'Location is not supported here. Type the place or send a pin on WhatsApp.');
        return;
      }
      say(pcm ? 'We dey find your location…' : 'Getting your location…');
      btn.disabled = true;

      navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        if (input) {
          if (!input.value.trim()) input.value = 'My current location';
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dataset.maps = `https://www.google.com/maps?q=${lat},${lng}`;
        }
        btn.disabled = false;
        say(`✓ ${pcm ? 'Location added' : 'Location added'} (about ${Math.round(pos.coords.accuracy)} m)`);
        updateLivePreview();
      }, err => {
        btn.disabled = false;
        say(err && err.code === 1
          ? (pcm ? 'Location blocked. Allow location for this site, or send pin for WhatsApp.' : 'Location is blocked. Allow location for this site, or send a pin on WhatsApp.')
          : (pcm ? 'We no fit get your location. Type the place or send pin for WhatsApp.' : 'Could not get your location. Type the place or send a pin on WhatsApp.'));
      }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 });
    });
  });

  // Typing a different place clears an old pin
  ['pickup-location', 'dropoff-location'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      delete el.dataset.maps;
      const st = document.getElementById('status-' + id);
      if (st) st.textContent = '';
    });
  });
}

/**
 * Free place search (Photon, OpenStreetMap data). If the service is unavailable it fails quietly;
 * typing any place and the built-in suggestions still work.
 */
const PLACE_COORDS = {};
function initPlaceSearch() {
  const list = document.getElementById('kano-places');
  if (!list || !window.fetch) return;
  const cache = {};
  const timers = {};
  const controllers = {};

  function buildLabel(p) {
    const first = p.name || [p.housenumber, p.street].filter(Boolean).join(' ');
    if (!first) return '';
    const seen = new Set();
    return [first, p.name ? p.street : '', p.district || p.locality, p.city || p.county]
      .filter(x => x && !seen.has(x.toLowerCase()) && seen.add(x.toLowerCase()))
      .join(', ');
  }

  function showOptions(items) {
    list.querySelectorAll('option[data-dyn]').forEach(o => o.remove());
    items.forEach(it => {
      PLACE_COORDS[it.label] = it.coords;
      const o = document.createElement('option');
      o.value = it.label;
      o.setAttribute('data-dyn', '1');
      list.appendChild(o);
    });
  }

  async function search(q, id) {
    if (cache[q]) { showOptions(cache[q]); return; }
    if (controllers[id]) controllers[id].abort();
    controllers[id] = new AbortController();
    try {
      const url = 'https://photon.komoot.io/api/?lang=en&limit=8&bbox=7.6,10.3,9.4,12.7&q=' + encodeURIComponent(q);
      const res = await fetch(url, { signal: controllers[id].signal });
      if (!res.ok) return;
      const data = await res.json();
      const items = (data.features || [])
        .filter(f => /kano/i.test((f.properties && f.properties.state) || ''))
        .map(f => ({ label: buildLabel(f.properties), coords: [f.geometry.coordinates[1], f.geometry.coordinates[0]] }))
        .filter(it => it.label);
      cache[q] = items;
      showOptions(items);
    } catch (e) { /* ignore */ }
  }

  ['pickup-location', 'dropoff-location'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      const v = el.value.trim();
      const known = PLACE_COORDS[v];
      if (known) {
        el.dataset.maps = `https://www.google.com/maps?q=${known[0].toFixed(6)},${known[1].toFixed(6)}`;
        updateLivePreview();
        return;
      }
      clearTimeout(timers[id]);
      if (v.length < 3 || v === 'My current location') return;
      timers[id] = setTimeout(() => search(v, id), 450);
    });
  });
}

function initLivePreview() {
  ['want-receipt', 'full-load', 'when-needed', 'needed-date', 'needed-time'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', updateLivePreview);
  });
  updateEstimate();
  updateLivePreview();
}

function updateLivePreview() {
  const previewBox = document.getElementById('whatsapp-preview-text');
  if (previewBox) {
    previewBox.textContent = buildWhatsAppMessage();
  }
}

/**
 * Form Validation and WhatsApp Redirection
 */
function initFormValidationAndSubmission() {
  const form = document.getElementById('delives-order-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    let firstErrorField = null;

    function checkField(id, errorMsg) {
      const field = document.getElementById(id);
      const group = field?.closest('.form-group');
      const errEl = group?.querySelector('.field-error-msg');

      if (!field || !field.value.trim() || field.value === '') {
        isValid = false;
        if (group) group.classList.add('has-error');
        if (field) field.classList.add('is-invalid');
        if (errEl) errEl.textContent = errorMsg;
        if (!firstErrorField) firstErrorField = field;
      } else {
        if (group) group.classList.remove('has-error');
        if (field) field.classList.remove('is-invalid');
      }
    }

    const isPidgin = currentLanguage === 'pcm';

    // Name check
    checkField(
      'customer-name',
      isPidgin ? 'Abeg enter your name' : 'Please enter your full name (Don Allah rubuta sunanka)'
    );

    // Phone check
    const phoneField = document.getElementById('customer-phone');
    const phoneVal = phoneField?.value.trim().replace(/\s+/g, '') || '';
    const phoneGroup = phoneField?.closest('.form-group');
    const phoneErr = phoneGroup?.querySelector('.field-error-msg');

    if (!phoneVal || phoneVal.length < 10) {
      isValid = false;
      if (phoneGroup) phoneGroup.classList.add('has-error');
      if (phoneField) phoneField.classList.add('is-invalid');
      if (phoneErr) {
        phoneErr.textContent = isPidgin
          ? 'Abeg enter correct phone number (at least 10 digits)'
          : 'Please enter a valid phone number (at least 10 digits e.g. 08012345678)';
      }
      if (!firstErrorField) firstErrorField = phoneField;
    } else {
      if (phoneGroup) phoneGroup.classList.remove('has-error');
      if (phoneField) phoneField.classList.remove('is-invalid');
    }

    // Pickup & Dropoff check
    checkField(
      'pickup-location',
      isPidgin ? 'Abeg type the market or location where we go pick am' : 'Please enter a pickup market or location in Kano'
    );
    checkField(
      'dropoff-location',
      isPidgin ? 'Abeg type where we go deliver am for Kano' : 'Please enter a drop-off destination in Kano'
    );

    // Details check
    checkField(
      'parcel-details',
      currentService === 'source'
        ? (isPidgin ? 'Abeg write the list of items you want us to buy' : 'Please list the items you want us to buy')
        : (isPidgin ? 'Abeg describe the parcel size and wetyn dey inside' : 'Please describe your parcel size and contents')
    );

    if (!isValid) {
      showToast(isPidgin ? '⚠️ Abeg fill all the required spaces.' : '⚠️ Please complete all required fields.', true);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
      return;
    }

    // Format WhatsApp message
    const message = buildWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;

    showToast(isPidgin ? '💬 Dey open WhatsApp with your order...' : '💬 Opening WhatsApp with your order details...');

    // Attempt direct redirection
    setTimeout(() => {
      window.location.href = waUrl;
    }, 300);
  });

  // Copy Preview to Clipboard
  const copyBtn = document.getElementById('copy-preview-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = buildWhatsAppMessage();
      navigator.clipboard.writeText(text).then(() => {
        showToast('📋 Message copied to clipboard! You can paste in WhatsApp.');
      }).catch(() => {
        showToast('Message ready to send.');
      });
    });
  }
}

/**
 * Toast Notification Helper
 */
function showToast(msg, isError = false) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.className = `toast-msg show ${isError ? 'error' : ''}`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        items.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/**
 * Helper to update element text safely
 */
function updateElementText(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

/**
 * Apply dictionary to all elements with data-i18n attributes
 */
function applyDictionary(dict) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Also update placeholders
  const nameInput = document.getElementById('customer-name');
  if (nameInput && dict.name_placeholder) nameInput.placeholder = dict.name_placeholder;

  const phoneInput = document.getElementById('customer-phone');
  if (phoneInput && dict.phone_placeholder) phoneInput.placeholder = dict.phone_placeholder;

  const pickupLandmark = document.getElementById('pickup-landmark');
  if (pickupLandmark && dict.pickup_landmark_placeholder) pickupLandmark.placeholder = dict.pickup_landmark_placeholder;

  const dropoffLandmark = document.getElementById('dropoff-landmark');
  if (dropoffLandmark && dict.dropoff_landmark_placeholder) dropoffLandmark.placeholder = dict.dropoff_landmark_placeholder;

  const details = document.getElementById('parcel-details');
  if (details) {
    details.placeholder = currentService === 'source' ? dict.details_placeholder_source : dict.details_placeholder_dispatch;
  }
}

/**
 * Hybrid Language Switcher
 * Supports: English, Hausa, Igbo, Yoruba, Nigerian Pidgin
 *
 * For Nigerian Pidgin: Uses custom JavaScript manual translation dictionary (PIDGIN_DICTIONARY).
 * For Hausa, Igbo, Yoruba: Uses Google Translate script, with fallback clean English DOM baseline.
 */
function initLanguageSwitcher() {
  const chips = document.querySelectorAll('.lang-chip-btn');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const lang = chip.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLanguage = lang;

  if (lang === 'pcm') {
    // 1. Reset any Google Translate translation if active
    resetGoogleTranslate();
    // 2. Apply hand-crafted Nigerian Pidgin dictionary
    applyDictionary(PIDGIN_DICTIONARY);
    updateEstimate();
    updateLivePreview();
    showToast('🇳🇬 Switch to Nigerian Pidgin!');
  } else if (lang === 'en') {
    // 1. Reset Google Translate
    resetGoogleTranslate();
    // 2. Apply English dictionary
    applyDictionary(ENGLISH_DICTIONARY);
    updateEstimate();
    updateLivePreview();
    showToast('🇬🇧 Switched to English');
  } else {
    // Hausa ('ha'), Igbo ('ig'), Yoruba ('yo')
    // 1. Restore pristine English DOM first so Google Translate works accurately
    applyDictionary(ENGLISH_DICTIONARY);
    updateEstimate();
    updateLivePreview();

    // 2. Trigger Google Translate script
    triggerGoogleTranslate(lang);

    const langNames = {
      ha: 'Harshen Hausa',
      ig: 'Asụsụ Igbo',
      yo: 'Èdè Yorùbá'
    };
    showToast(`🌍 Translating to ${langNames[lang] || lang}...`);
  }
}

function resetGoogleTranslate() {
  const domain = window.location.hostname;
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  if (domain && domain !== 'localhost') {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${domain}; path=/;`;
  }

  const select = document.querySelector('.goog-te-combo');
  if (select && select.value !== 'en') {
    select.value = 'en';
    select.dispatchEvent(new Event('change'));
  }
}

function triggerGoogleTranslate(langCode) {
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${langCode}; path=/;`;
  if (domain && domain !== 'localhost') {
    document.cookie = `googtrans=/en/${langCode}; domain=.${domain}; path=/;`;
  }

  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  } else {
    window.location.hash = `#googtrans(en|${langCode})`;
  }
}

// Global hook for Google Translate widget
window.googleTranslateElementInit = function() {
  if (window.google && window.google.translate) {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,ha,ig,yo',
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');
  }
};
