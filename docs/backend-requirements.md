# Backend requirements

## Context

Frontend Angular for a professional coaching website with:

- Public presentation page.
- Registered client area.
- Three-month appointment availability view.
- Coach planning import/export using Excel.
- Email confirmations.
- Past session valuation and private notes.

The future backend will be Java with MySQL 8.

## Main roles

- `COACH`: manages planning, imports/exports availability and sees client notes.
- `CLIENT`: books sessions, sees own appointments, writes post-session valuation and private note.

## Suggested entities

- `users`: authentication identity, role, email, name, status.
- `clients`: client profile details linked to `users`.
- `price_tiers`: name, color, price, active flag.
- `availability_slots`: date, start time, end time, price tier, source, status.
- `appointments`: client, slot, status, reserved at, cancellation metadata.
- `planning_imports`: uploaded file metadata, result counters, collision summary.
- `appointment_feedback`: appointment, rating, private note, created/updated timestamps.
- `email_notifications`: recipient, template, status, related appointment, send attempts.
- `public_testimonials`: curated comments for the landing carousel.

## API needs

- `POST /auth/login`
- `GET /me`
- `GET /public/profile`
- `GET /public/testimonials`
- `GET /client/availability?from=YYYY-MM-DD&to=YYYY-MM-DD`
- `POST /client/appointments`
- `GET /client/appointments`
- `PUT /client/appointments/{id}/feedback`
- `GET /coach/planning/export`
- `POST /coach/planning/import`
- `GET /coach/appointments?from=YYYY-MM-DD&to=YYYY-MM-DD`
- `GET /coach/clients/{id}/notes`

## Business rules

- Clients can only see availability from today up to three months ahead.
- Coach can upload planning from today onward for any future range.
- If an imported slot collides with an already reserved appointment, the reservation wins.
- Import must finish with a clear summary: created, updated, ignored and collisions.
- Appointment booking must be transactional to prevent double booking.
- Confirmation email is sent to coach and client after a successful booking.
- Past appointment feedback is visible only to the client and the coach.

## Excel import/export

Initial expected columns:

- `date`
- `start_time`
- `end_time`
- `price_tier`
- `price`
- `status`
- `client_email` only on export when booked
- `client_name` only on export when booked

## Frontend assumptions used in the prototype

- Price tiers are currently: Esencial 55 EUR, Preferente 75 EUR, Intensiva 95 EUR.
- Colors are stored by tier and returned by the backend.
- Public testimonials are curated by the coach, not submitted live by visitors.
- The coach profile photo should be available as `src/assets/coach-profile.jpg`.
