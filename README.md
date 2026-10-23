# Hotel Lindenhof

## Description

Hotel Lindenhof is the final project of my Front End module. It is the website of a fictional mountain hotel in Leoben (Austria), built around a working online booking engine.

Guests choose their dates and the number of adults and children, and the site shows only the rooms that fit their group. When a room is selected, the booking summary updates automatically with the dates, number of nights, guests and total price. A voucher code can be applied to get a discount, and the booking is completed in three steps: choose your room, fill in your details and reservation confirmed. Around the booking engine, the website includes pages for the rooms, the activities, the restaurant and a blog.

This project combines my background in tourism and hotel management with what I have learned about web development. I designed the flow thinking about what a real guest expects when booking a hotel online.

## Features

- Online booking engine with search by dates and number of guests.
- Automatic calculation of the number of nights and the total price.
- Rooms filtered by the number of guests, with one room selected at a time.
- Live booking summary that updates with every action.
- Voucher code with a 10% discount (try `welcome10`).
- Three-step booking process with form validation.
- Dedicated pages for the rooms, activities, restaurant and blog.
- Activities filtered by season and menu organized in tabs by category.
- Blog & Reviews content loaded dynamically from data arrays and from the DummyJSON API.
- Responsive design for mobile, tablet and desktop.

## Technologies

- HTML5
- Tailwind CSS + DaisyUI (CDN)
- JavaScript (Vanilla, ES modules)
- DummyJSON API

## Design

- Wireframes sketched by hand before starting the development.
- Color palette of browns and greens, inspired by nature, the main value of the hotel.
- Responsive layout built with Flexbox and Tailwind breakpoints.

## What I Learned

- Share the booking data between several modules with a shared state object.
- Calculate the difference between two dates and turn it into a number of nights.
- Combine several conditions in a single filter (number of guests, season).
- Render data dynamically to the DOM.
- Fetch data from an API.
- Organize the code into ES modules..
- Build responsive layouts with Flexbox, Tailwind CSS and DaisyUI components.
- Validate forms with HTML5 attributes.
- Debug scope, selector and path errors with the browser's DevTools.

## Author

**Mar Alaya Melia**  
Software Development project at Digital Career Institute (DCI).
