import { suscribers } from "./data/newsletter.js";
import { saveSuscriber } from "./utils/helpers.js";
import { loadSuscribers } from "./utils/helpers.js";

const newsletter_form = document.querySelector("#newsletter-form");
const newsletter_email = document.querySelector("#newsletter-input");
const email_validator = document.querySelector("#email-validator");

const email_text = document.querySelector("#email-text");
const email_btn = document.querySelector("#email-btn");
const email_field = document.querySelector("#email-field");

const voucher_text = document.querySelector("#voucher-text");
const voucher_btn = document.querySelector("#voucher-btn");

newsletter_form.addEventListener("submit", () => {
  email_validator.classList.add("hidden");
  event.preventDefault();
  loadSuscribers();
  let user_email = newsletter_email.value;

  if (suscribers.includes(user_email)) {
    email_validator.classList.remove("hidden");
  } else {
    email_validator.classList.add("hidden");

    suscribers.push(user_email);
    saveSuscriber();
    email_text.classList.add("hidden");
    email_btn.classList.add("hidden");
    email_field.classList.add("hidden");

    voucher_text.classList.remove("hidden");
    voucher_btn.classList.remove("hidden");
  }
});
