/**
 * Pelkan Delives - Kano Transit & Market Sourcing
 * Lightweight zero-dependency JavaScript engine
 * WhatsApp Routing target: 2348150565192
 * Customer Support: pelkanhaus@gmail.com
 */

const WHATSAPP_PHONE = '2348150565192';
const SUPPORT_EMAIL = 'pelkanhaus@gmail.com';

// State
let currentService = 'source'; // 'source' (Buy & Source) or 'dispatch' (Pick Up & Deliver)
let currentUrgency = 'pooled';  // 'pooled' or 'express'
let currentLanguage = 'en';     // 'en', 'ha', 'ig', 'yo', 'pcm'

// English Master Dictionary
const ENGLISH_DICTIONARY = {
  top_notice: '📍 Launch Zones: Kwari, Sabon Gari, Farm Center, Zoo Road, BUK (Other areas: message us first!)',
  brand_tagline: 'We shop Kantin Kwari, Sabon Gari and Farm Center for you and deliver in Kano',
  hero_pill: '🇳🇬 Kano State Local Dispatch • Zero-App Required',
   hero_title_1: 'We shop the markets & stores for you.',
  hero_title_2: 'We deliver across Kano.',
  hero_sub: 'From Kantin Kwari, Sabon Gari and Farm Center to your nearest supermarket — we buy, package and deliver. No app needed. Just WhatsApp.',
  badge_nosignup: '⚡ No Sign-up',
  badge_riders: '🛵 Local Kano Riders',
  badge_whatsapp: '💬 WhatsApp Checkout',
  badge_fares: '💰 Transparent Fares',
  service_choose_title: 'Choose Service Type (Zaɓi Aiki)',
  service_choose_hint: 'Tap to switch',
  service_source_title: 'Buy & Source for Me',
  service_source_sub: 'Markets + Supermarkets: Kwari, Sabon Gari, Farm Center, Shoprite & more',
  service_dispatch_title: 'Pick Up & Deliver',
  service_dispatch_sub: 'Direct Dispatch: Parcels, food, documents across town',
  service_hint_source: '<strong>🛍️ Market & Store Concierge:</strong> Our rider visits Kantin Kwari, Sabon Gari, Farm Center, or your chosen supermarket. We inspect, negotiate/buy, and deliver to you.',
  service_hint_dispatch: '<strong>📦 Direct Dispatch Mode:</strong> Our rider picks up your ready parcel from your home, shop, or campus gate and delivers straight to the recipient.',
  form_header_title: '📝 Dispatch Request Details',
  quick_sample_title: 'Quick Sample Test (Danna don gwada cikawa):',
  chip_sample_kwari: '🛍️ Kwari Atamfa Run',
  chip_sample_buk: '📦 BUK Old to New Campus',
  chip_sample_dawanau: '🌾 Dawanau Grain Bulk',
  label_name: 'Your Full Name (Sunanka)',
  name_placeholder: 'e.g. Ibrahim Sani / Fatima Bello',
  label_phone: 'WhatsApp Phone (Lambar Waya)',
  phone_placeholder: 'e.g. 08012345678 or 070...',
  label_pickup_source: 'Market to Buy From',
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
  details_placeholder_source: 'List items with details (e.g. 2 bundles Super English Wax from Kwari Line 4, 1 tin pure shea butter, or contact phone of stall owner)',
  details_placeholder_dispatch: 'Describe package (e.g. 1 Medium food container flask, sealed document envelope, laptop bag, carton of clothes, approx 3kg)',
  label_timing: 'Preferred Transit Speed (Saurin Aikawa)',
  timing_pooled_title: '🤝 Pooled Economy',
  timing_pooled_badge: 'Best Value',
  timing_pooled_sub: 'Combined route delivery across Kano (Delivered today)',
  timing_express_title: '⚡ Express Direct',
  timing_express_badge: 'Fastest',
  timing_express_sub: 'Single dedicated rider dispatched straight away',
  rate_label: 'Estimated Kano Route Fare',
  rate_subtext: 'Base local fare estimation (Final fare agreed on WhatsApp)',
  btn_submit_text: 'Get Estimate via WhatsApp 💬',
  submit_subtext: '⚡ Opens WhatsApp directly with your formatted details ready to send.',
  preview_header_title: '👁️ WhatsApp Dispatch Template Preview',
  btn_copy: '📋 Copy Message',
  trust_1_title: 'Kano Native Riders',
  trust_1_sub: 'Deep knowledge of Kwari & Sabon Gari lines.',
  trust_2_title: 'Transparent Fares',
  trust_2_sub: 'No hidden surges. Fair local transport rates.',
  trust_3_title: 'Zero App Friction',
  trust_3_sub: 'No storage space wasted on heavy downloads.',
  routes_title: '📍 Popular Kano Route Fare Estimates',
  how_heading: 'How Pelkan Delives Works (Yadda Yake Aiki)',
  step_1_title: 'Fill Quick Form',
  step_1_desc: 'Select your market or pickup location and enter your item details.',
  step_2_title: 'Tap WhatsApp',
  step_2_desc: 'One tap routes your structured order straight to our dispatch line: 0815 056 5192.',
  step_3_title: 'Rider Dispatched',
  step_3_desc: 'Get instant confirmation, live rider contact, and real-time updates.',
  support_title: 'Customer Support & Feedback (Maganar Abokin Ciniki)',
  support_sub: 'Have a complaint, suggestion, or opinion? We want to hear from you directly.',
  support_desc: 'At Pelkan Delives, our mission is to make movement and market sourcing across Kano stress-free and affordable. Whether your rider was exceptional, you experienced a delay, or you have an idea to improve our service, please reach out to our management.',
  support_email_btn: '✉️ Email Us: pelkanhaus@gmail.com',
  support_wa_btn: '💬 WhatsApp Support & Feedback',
  faq_heading: 'Frequently Asked Questions (Tambayoyin Da Aka Saba Yi)'
};

// Nigerian Pidgin Manual Translation Dictionary (Specialized Hybrid Switcher)
const PIDGIN_DICTIONARY = {
  top_notice: '📍 Launch Zones: Kwari, Sabon Gari, Farm Center, Zoo Road, BUK (Other areas: text us first!)',
  brand_tagline: 'We go shop for Kantin Kwari, Sabon Gari and Farm Center for you, con deliver am for Kano',
  hero_pill: '🇳🇬 Kano State Local Dispatch • You No Need Download Any App',
  hero_title_1: 'Your order dey handled',
  hero_title_2: 'personally by Pelkan, una trusted delivery padi.',
  hero_sub: 'We don dey take early orders for local delivery and market runs. No app wahala—build your order below make we chat for WhatsApp.',
  badge_nosignup: '⚡ No Sign-up Stress',
  badge_riders: '🛵 Kano Local Riders',
  badge_whatsapp: '💬 WhatsApp Direct Chat',
  badge_fares: '💰 Cheap Shared Price for ₦',
  service_choose_title: 'Choose Wetin You Want Us To Do',
  service_choose_hint: 'Tap to change',
  service_source_title: 'Buy & Source for Me',
  service_source_sub: 'Market Run: Kwari, Sabon Gari, Farm Center, Kurmi, Dawanau',
  service_dispatch_title: 'Pick Up & Deliver Package',
  service_dispatch_sub: 'Direct Dispatch: Waybill, food, documents across Kano',
  service_hint_source: '<strong>🛍️ Market Concierge Mode:</strong> Our rider go enter Kantin Kwari, Sabon Gari, Farm Center, Kurmi, or Dawanau go inspect the goods, price am, buy am, and carry am reach your doorstep.',
  service_hint_dispatch: '<strong>📦 Direct Dispatch Mode:</strong> Our rider go pick up your package from your hand, shop, or gate and carry am straight give the person wey get am.',
  form_header_title: '📝 Wetin We Go Deliver',
  quick_sample_title: 'Quick Sample Test (Tap to test fill):',
  chip_sample_kwari: '🛍️ Kwari Atamfa Run',
  chip_sample_buk: '📦 BUK Old to New Campus',
  chip_sample_dawanau: '🌾 Dawanau Grain Bulk',
  label_name: 'Your Full Name (Your Name)',
  name_placeholder: 'e.g. Ibrahim Sani / Fatima Bello',
  label_phone: 'WhatsApp Phone (Your Number)',
  phone_placeholder: 'e.g. 08012345678 or 070...',
  label_pickup_source: 'Market Where We Go Buy am',
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
  details_placeholder_source: 'List wetyn you want us to buy with details (e.g. 2 bundles Super English Wax for Kwari Line 4, pure shea butter, or seller phone number)',
  details_placeholder_dispatch: 'Describe the parcel (e.g. 1 medium food flask, sealed documents, laptop bag, carton of clothes, approx 3kg)',
  label_timing: 'How Quick You Want am? (Transit Speed)',
  timing_pooled_title: '🤝 Follow Other Delivery (Pooled)',
  timing_pooled_badge: 'Best Price',
  timing_pooled_sub: 'Follow other deliveries across Kano (Reach today)',
  timing_express_title: '⚡ Express Solo Direct',
  timing_express_badge: 'Sharp Sharp',
  timing_express_sub: 'Single dedicated rider move straight immediately',
  rate_label: 'Estimated Price for Kano',
  rate_subtext: 'Local price estimation (We go finalize am on WhatsApp)',
  btn_submit_text: 'Get Estimate via WhatsApp 💬',
  submit_subtext: '⚡ E go open WhatsApp directly with all your details ready to send.',
  preview_header_title: '👁️ WhatsApp Dispatch Template Preview',
  btn_copy: '📋 Copy Message',
  trust_1_title: 'Kano Native Riders',
  trust_1_sub: 'Our riders sabi Kwari and Sabon Gari lines well well.',
  trust_2_title: 'Clean Honest Price',
  trust_2_sub: 'No hidden charges. Correct local Kano fares.',
  trust_3_title: 'Zero App Wahala',
  trust_3_sub: 'No phone space wasted on downloading heavy app.',
  routes_title: '📍 Popular Kano Route Price Estimates',
  how_heading: 'How Pelkan Delives Dey Work',
  step_1_title: 'Fill Quick Form',
  step_1_desc: 'Pick your market or pickup location and enter your item details.',
  step_2_title: 'Tap WhatsApp',
  step_2_desc: 'One tap go send all your order details straight to our line: 0815 056 5192.',
  step_3_title: 'Rider Go Move',
  step_3_desc: 'Get quick confirmation, rider number, and live update until package reach.',
  support_title: 'Customer Support & Feedback',
  support_sub: 'You get complaint, suggestion, or opinion? Tell us direct!',
  support_desc: 'For Pelkan Delives, our goal na make sure say moving things and buying from Kano markets dey affordable and easy for you. If rider delay, or you get idea how we fit improve, please write to our management.',
  support_email_btn: '✉️ Send Email: pelkanhaus@gmail.com',
  support_wa_btn: '💬 WhatsApp Support & Feedback',
  faq_heading: 'Frequently Asked Questions (Questions Wey People Dey Ask)'
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initServiceToggle();
  initUrgencyToggle();
  initLocationListeners();
  initFormValidationAndSubmission();
  initLivePreview();
  initQuickFills();
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
    select.addEventListener('change', () => {
      wrap.style.display = 'block';
      if (select.value === 'Other') {
        const input = wrap.querySelector('input');
        if (input) input.focus();
      }
      updateEstimate();
      updateLivePreview();
    });
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
    baseMin = 5000;
    baseMax = 6500;
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

  let label = currentUrgency === 'express' ? 'Express Direct' : 'Pooled Economy';

  if (currentService === 'source') {
    label = 'Transit (Sourcing Fee applied on WhatsApp)';
  }

  return {
    min: Math.round(baseMin / 50) * 50,
    max: Math.round(baseMax / 50) * 50,
    label: label
  };
}

function updateEstimate() {
  const est = calculateFareEstimate();
  const rateDisplay = document.getElementById('est-rate-amount');
  const rateTag = document.getElementById('est-rate-tag');

  if (rateDisplay) {
    rateDisplay.innerHTML = `₦${est.min.toLocaleString()} - <span>₦${est.max.toLocaleString()}</span>`;
  }
  if (rateTag) {
    rateTag.textContent = est.label;
  }
}

/**
 * Format WhatsApp Message Template
 */
function buildWhatsAppMessage() {
  const name = document.getElementById('customer-name')?.value.trim() || '[Customer Name]';
  const phone = document.getElementById('customer-phone')?.value.trim() || '[Phone Number]';
  const pickup = document.getElementById('pickup-location')?.value || 'Not selected';
  const pickupLandmark = document.getElementById('pickup-landmark')?.value.trim() || '';
  const dropoff = document.getElementById('dropoff-location')?.value || 'Not selected';
  const dropoffLandmark = document.getElementById('dropoff-landmark')?.value.trim() || '';
  const details = document.getElementById('parcel-details')?.value.trim() || '[No details entered yet]';

  const isPidgin = currentLanguage === 'pcm';

  let serviceName = '';
  if (currentService === 'source') {
    serviceName = isPidgin ? '🛍️ Buy & Source for Me (Market Run)' : '🛍️ Buy & Source for Me (Market Concierge)';
  } else {
    serviceName = isPidgin ? '📦 Pick Up & Deliver (Waybill/Package)' : '📦 Pick Up & Deliver Package (Direct Dispatch)';
  }

  let urgencyText = '';
  if (currentUrgency === 'express') {
    urgencyText = isPidgin ? '⚡ Express Solo (Sharp sharp move)' : '⚡ Express Direct (Rider dispatches immediately)';
  } else {
    urgencyText = isPidgin ? '🤝 Follow Other Delivery (Cheap pooled - today)' : '🤝 Standard Pooled (Best local rate - today)';
  }

  const est = calculateFareEstimate();

  const lines = [
    `*🔴 PELKAN DELIVES - NEW DISPATCH REQUEST*`,
    `----------------------------------------`,
    `*Service:* ${serviceName}`,
    `*Customer:* ${name}`,
    `*Phone:* ${phone}`,
    ``,
    `*📍 Pickup / Market:* ${pickup}${pickupLandmark ? ` (${pickupLandmark})` : ''}`,
    `*🎯 Drop-off / Destination:* ${dropoff}${dropoffLandmark ? ` (${dropoffLandmark})` : ''}`,
    ``,
    `*📦 Details / Shopping List:*`,
    `${details}`,
    ``,
    `*⏱️ Preference:* ${urgencyText}`,
    `*💰 Est. Transit Fare:* ~₦${est.min.toLocaleString()} - ₦${est.max.toLocaleString()} (Kano local)`
  ];

  // Append new Market Sourcing rules dynamically
  if (currentService === 'source') {
    lines.push(`*🛒 Sourcing Fee:* To be confirmed on WhatsApp (Starts at ₦500 - ₦5,000+ based on difficulty)`);
    lines.push(`*⏱️ Wait Time:* Free for 20 mins (Extra fee applies after)`);
  }

  lines.push(`*🚚 Load Size:* To be confirmed on WhatsApp (Bike / Medium / Keke)`);
  lines.push(`----------------------------------------`);
  lines.push(`_Sent via Pelkan Delives Zero-App Portal_`);
  
  if (currentService === 'source') {
    lines.push(`_Note: Item cost is paid at shop price with receipt. Our fee is separate. No hidden markups._`);
  }

  return lines.join('\n');
}

function initLivePreview() {
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
      isPidgin ? 'Abeg pick the market or location where we go pick am' : 'Please select a pickup market or location in Kano'
    );
    checkField(
      'dropoff-location',
      isPidgin ? 'Abeg pick where we go deliver am for Kano' : 'Please select a drop-off destination in Kano'
    );

    // Details check
    checkField(
      'parcel-details',
      currentService === 'source'
        ? (isPidgin ? 'Abeg write the list of items you want us to buy' : 'Please list the items you want us to buy')
        : (isPidgin ? 'Abeg describe the parcel size and wetyn dey inside' : 'Please describe your parcel size and contents')
    );

    if (!isValid) {
      showToast(isPidgin ? '⚠️ Abeg fill all the required spaces.' : '⚠ Please complete all required fields.', true);
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
 * Quick Fill Sample Buttons for rapid testing
 */
function initQuickFills() {
  const btnKwari = document.getElementById('chip-sample-kwari');
  const btnBUK = document.getElementById('chip-sample-buk');
  const btnDawanau = document.getElementById('chip-sample-dawanau');

  if (btnKwari) {
    btnKwari.addEventListener('click', () => {
      document.getElementById('card-service-source')?.click();
      setVal('customer-name', 'Ibrahim Sani');
      setVal('customer-phone', '08034567890');
      setVal('pickup-location', 'Kantin Kwari Market');
      setVal('pickup-landmark', 'Line 4, Near Bata Flyover / Shop 18');
      setVal('dropoff-location', 'Tarauni');
      setVal('dropoff-landmark', 'Gyadi-Gyadi Court Road, House 12');
      setVal('parcel-details', '3 bundles of Atamfa (Target Super Wax), colors blue and gold. Budget approx ₦28,000. Receipt requested.');
      updateEstimate();
      updateLivePreview();
      showToast('Loaded Kantin Kwari shopping sample!');
    });
  }

  if (btnBUK) {
    btnBUK.addEventListener('click', () => {
      document.getElementById('card-service-dispatch')?.click();
      setVal('customer-name', 'Amina Garba');
      setVal('customer-phone', '07019876543');
      setVal('pickup-location', 'Bayero University Kano (BUK Old Campus)');
      setVal('pickup-landmark', 'Kabuga Gate, Student Hostel Block B');
      setVal('dropoff-location', 'Bayero University Kano (BUK New Campus)');
      setVal('dropoff-landmark', 'Faculty of Engineering, Dean Office');
      setVal('parcel-details', 'Urgent course project folder and flash drive in a brown taped envelope. Handle with care.');
      updateEstimate();
      updateLivePreview();
      showToast('Loaded BUK Campus dispatch sample!');
    });
  }

  if (btnDawanau) {
    btnDawanau.addEventListener('click', () => {
      document.getElementById('card-service-source')?.click();
      setVal('customer-name', 'Malam Kabir');
      setVal('customer-phone', '08123456701');
      setVal('pickup-location', 'Dawanau Market');
      setVal('pickup-landmark', 'Grains Section, Store #45');
      setVal('dropoff-location', 'Nassarawa');
      setVal('dropoff-landmark', 'Lamido Crescent, Off State Road');
      setVal('parcel-details', '1 bag (50kg) refined local white beans and 1 bag brown rice. Please verify grain quality before loading on tricycle dispatch.');
      updateEstimate();
      updateLivePreview();
      showToast('Loaded Dawanau Grain Run sample!');
    });
  }

  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) {
      el.value = val;
      el.classList.remove('is-invalid');
      const group = el.closest('.form-group');
      if (group) group.classList.remove('has-error');
    }
  }
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
