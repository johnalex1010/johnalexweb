"use client";

import { ChangeEvent, FocusEvent, FormEvent, useMemo, useState } from "react";
import { LockKeyhole, Mail, MessageCircle, Phone, Send, Tag, User } from "lucide-react";

const whatsappNumber = "573214548919";
const namePattern = /^[\p{L}\s]+$/u;
const textPattern = /^[\p{L}\p{N}\s,.]+$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = "name" | "email" | "phone" | "subject" | "message";

type FormValues = Record<FieldName, string>;
type FieldState = Record<FieldName, boolean>;
type FormErrors = Record<FieldName, string>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const initialFieldState: FieldState = {
  name: false,
  email: false,
  phone: false,
  subject: false,
  message: false,
};

function validateField(fieldName: FieldName, value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Este campo es obligatorio.";
  }

  if (fieldName === "name" && !namePattern.test(trimmedValue)) {
    return "Ingresa solo letras y espacios.";
  }

  if (fieldName === "email" && !emailPattern.test(trimmedValue)) {
    return "Ingresa un correo válido.";
  }

  if (fieldName === "phone") {
    if (!/^\d+$/.test(trimmedValue)) {
      return "Ingresa solo números.";
    }

    if (trimmedValue.length !== 10) {
      return "El número debe tener exactamente 10 dígitos.";
    }
  }

  if (fieldName === "subject") {
    if (trimmedValue.length > 60) {
      return "El asunto no puede superar 60 caracteres.";
    }

    if (!textPattern.test(trimmedValue)) {
      return "Usa solo letras, números, espacios, comas y puntos.";
    }
  }

  if (fieldName === "message") {
    if (trimmedValue.length > 200) {
      return "El mensaje no puede superar 200 caracteres.";
    }

    if (!textPattern.test(trimmedValue)) {
      return "Usa solo letras, números, espacios, comas y puntos.";
    }
  }

  return "";
}

function validateForm(values: FormValues): FormErrors {
  return {
    name: validateField("name", values.name),
    email: validateField("email", values.email),
    phone: validateField("phone", values.phone),
    subject: validateField("subject", values.subject),
    message: validateField("message", values.message),
  };
}

export function ContactWhatsappForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [focusedFields, setFocusedFields] = useState<FieldState>(initialFieldState);
  const [touchedFields, setTouchedFields] = useState<FieldState>(initialFieldState);
  const errors = useMemo(() => validateForm(values), [values]);
  const isFormValid = Object.values(errors).every((error) => error === "");

  function shouldShowError(fieldName: FieldName) {
    return Boolean(errors[fieldName] && (focusedFields[fieldName] || touchedFields[fieldName]));
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const fieldName = event.currentTarget.name as FieldName;
    const fieldValue = event.currentTarget.value;

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }));
  }

  function handleFocus(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const fieldName = event.currentTarget.name as FieldName;

    setFocusedFields((currentFields) => ({
      ...currentFields,
      [fieldName]: true,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const fieldName = event.currentTarget.name as FieldName;

    setFocusedFields((currentFields) => ({
      ...currentFields,
      [fieldName]: false,
    }));
    setTouchedFields((currentFields) => ({
      ...currentFields,
      [fieldName]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouchedFields({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!isFormValid) {
      return;
    }

    const whatsappMessage = [
      "Hola John Alex, quiero hablar sobre un proyecto.",
      "",
      `Nombre: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Celular: ${values.phone.trim()}`,
      `Asunto: ${values.subject.trim()}`,
      "",
      "Mensaje:",
      values.message.trim(),
    ].join("\n");
    const whatsappUrl = new URL("https://api.whatsapp.com/send");

    whatsappUrl.searchParams.set("phone", whatsappNumber);
    whatsappUrl.searchParams.set("text", whatsappMessage);
    window.location.assign(whatsappUrl.toString());
  }

  return (
    <form
      className="contact-form"
      aria-describedby="contact-form-privacy"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="contact-name">
            <User aria-hidden="true" />
            Nombre completo
          </label>
          <input
            aria-describedby={shouldShowError("name") ? "contact-name-error" : undefined}
            aria-invalid={shouldShowError("name")}
            autoComplete="name"
            id="contact-name"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Tu nombre"
            required
            type="text"
            value={values.name}
          />
          {shouldShowError("name") ? (
            <small className="contact-form__error" id="contact-name-error">
              {errors.name}
            </small>
          ) : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email">
            <Mail aria-hidden="true" />
            Email
          </label>
          <input
            aria-describedby={shouldShowError("email") ? "contact-email-error" : undefined}
            aria-invalid={shouldShowError("email")}
            autoComplete="email"
            id="contact-email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="tu@email.com"
            required
            type="email"
            value={values.email}
          />
          {shouldShowError("email") ? (
            <small className="contact-form__error" id="contact-email-error">
              {errors.email}
            </small>
          ) : null}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-phone">
          <Phone aria-hidden="true" />
          Número de celular
        </label>
        <input
          aria-describedby={shouldShowError("phone") ? "contact-phone-error" : undefined}
          aria-invalid={shouldShowError("phone")}
          autoComplete="tel"
          id="contact-phone"
          inputMode="numeric"
          name="phone"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="3000000000"
          required
          type="tel"
          value={values.phone}
        />
        {shouldShowError("phone") ? (
          <small className="contact-form__error" id="contact-phone-error">
            {errors.phone}
          </small>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-subject">
          <Tag aria-hidden="true" />
          Asunto
        </label>
        <input
          aria-describedby="contact-subject-help"
          aria-invalid={shouldShowError("subject")}
          autoComplete="off"
          id="contact-subject"
          name="subject"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Sitio web, SEO, consultoría"
          required
          type="text"
          value={values.subject}
        />
        <small
          className={shouldShowError("subject") ? "contact-form__error" : "contact-form__hint"}
          id="contact-subject-help"
        >
          {shouldShowError("subject")
            ? errors.subject
            : `${values.subject.length}/60 caracteres.`}
        </small>
      </div>

      <div className="contact-form__field contact-form__field--message">
        <label htmlFor="contact-message">
          <MessageCircle aria-hidden="true" />
          Cuéntame sobre tu proyecto
        </label>
        <textarea
          aria-describedby="contact-message-help"
          aria-invalid={shouldShowError("message")}
          id="contact-message"
          name="message"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Escribe los detalles de tu idea, objetivos y cualquier información importante."
          required
          rows={7}
          value={values.message}
        />
        <small
          className={shouldShowError("message") ? "contact-form__error" : "contact-form__hint"}
          id="contact-message-help"
        >
          {shouldShowError("message")
            ? errors.message
            : `${values.message.length}/200 caracteres.`}
        </small>
      </div>

      <button className="contact-form__button" disabled={!isFormValid} type="submit">
        <Send aria-hidden="true" />
        Enviar mensaje por WhatsApp
      </button>

      <p className="contact-form__privacy" id="contact-form-privacy">
        <LockKeyhole aria-hidden="true" />
        Tus datos solo se usarán para construir el mensaje de WhatsApp.
      </p>
    </form>
  );
}
