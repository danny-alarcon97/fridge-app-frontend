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
            Decide what compartment you wish to store an item
          </h3>
          <p class="step-description">
            There are three compartments in which you can choose to store items.
            Want to document a purchase of milk? Go to your{" "}
            <strong>"fridge"</strong> page and add the item from there. Same
            goes for the other two compartments, the <strong>"freezer"</strong>{" "}
            and your <strong>"pantry"</strong>. The only essential info the app
            needs includes the name of the item and how many of said items are
            being added.
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
          <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
          <p class="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        {/* <!-- STEP 03 --> */}
        <div class="step-text-box">
          <p class="step-number">03</p>
          <h3 class="heading-tertiary">Receive meals at convenient time</h3>
          <p class="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
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
