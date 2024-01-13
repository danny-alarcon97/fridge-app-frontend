import React from "react";

function HowItWorks() {
  return (
    <section class="section-how" id="how">
      <div class="container">
        <span class="subheading">How it works</span>
        <h2 class="heading-secondary">
          Keeping track of your kitchen in 3 simple steps
        </h2>
      </div>

      <div class="container grid grid--2-cols grid--center-v">
        {/* <!-- STEP 01 --> */}
        <div class="step-text-box">
          <p class="step-number">01</p>
          <h3 class="heading-tertiary">
            Select the Appropriate Compartment for Item Storage
          </h3>
          <p class="step-description">
            The application offers three distinct compartments for item storage:
            the <strong>"Fridge"</strong>, <strong>"Freezer"</strong>, and{" "}
            <strong>"Pantry"</strong>. For instance, to log the purchase of
            milk, navigate to the <strong>"Fridge"</strong> section and record
            the item there. This procedure is identical for the other
            compartments. The application requires only the item's name and the
            quantity being stored.
          </p>
        </div>

        <div class="step-img-box">
          <img
            src="img/app/app-screen-1.png"
            class="step-img"
            alt="iPhone app
        preferences selection screen"
          />
        </div>

        {/* <!-- STEP 02 --> */}
        <div class="step-img-box">
          <img
            src="img/app/app-screen-2.png"
            class="step-img"
            alt="iPhone app
        meal approving plan screen"
          />
        </div>
        <div class="step-text-box">
          <p class="step-number">02</p>
          <h3 class="heading-tertiary">Organize your kitchen!</h3>
          <p class="step-description">
            After populating your kitchen compartments with items, you have full
            control to modify or remove them. You can access your kitchen
            compartments through the navigation menu for easy management.
          </p>
        </div>

        {/* <!-- STEP 03 --> */}
        <div class="step-text-box">
          <p class="step-number">03</p>
          <h3 class="heading-tertiary">Anything expiring soon?</h3>
          <p class="step-description">
            The app also allows you to view items nearing expiration via the{" "}
            <strong>"Expiration List"</strong> feature. It's important to remove
            items from the list once they are no longer present in your kitchen,
            ensuring your inventory remains up-to-date and organized.
          </p>
        </div>
        <div class="step-img-box">
          <img
            src="img/app/app-screen-3.png"
            class="step-img"
            alt="iPhone app
        delivery screen"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
