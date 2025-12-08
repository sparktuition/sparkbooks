import React from "react";
import "./BookWritingPlan.css";

const topics = [
  "Plot Development Basics: How to shape your story’s core idea into a structured plot.",
  "Character Creation: Building believable and compelling characters.",
  "Crafting the Hero: Developing a memorable protagonist.",
  "Villains and Antagonists: Creating strong conflicts and opposing forces.",
  "World-Building: How to create immersive settings and environments.",
  "Conflict and Tension: Techniques to build and sustain narrative tension.",
  "Dialogue Writing: Crafting natural and engaging dialogue.",
  "Point of View and Perspective: Choosing and maintaining the right narrative voice.",
  "Pacing Your Story: How to manage the flow and speed of your narrative.",
  "Themes and Symbols: Weaving deeper meanings into your story.",
  "Creative Language: Using metaphors, similes, and alliteration effectively.",
  "Scene Structuring: Building impactful scenes and chapters.",
  "Writing Descriptions: Painting vivid pictures with words.",
  "Internal Monologue: Exploring your characters’ thoughts and emotions.",
  "Building Subplots: Adding layers to your main storyline.",
  "Writing Emotionally Resonant Scenes: Evoking feelings in your readers.",
  "Humor and Wit: Incorporating humor where appropriate.",
  "Building to a Climax: Structuring the peak of your story.",
  "Resolutions and Endings: Crafting satisfying conclusions.",
  "Editing and Revising: Tips for polishing your draft.",
  "Overcoming Writer’s Block: Strategies for staying creative.",
  "Maintaining Consistency: Ensuring continuity in your narrative.",
  "Foreshadowing and Suspense: Using hints to build anticipation.",
  "Writing Different Genres: Adapting your style to various genres.",
  "Using Literary Devices: Exploring symbolism, irony, and more.",
  "Collaborative Writing: How to co-write or get feedback from peers.",
  "Finalizing Your Manuscript: Preparing your book for the next steps.",
  "Publishing Pathways: Understanding different publishing routes (traditional, self-publishing, etc.)."
];

const BookWritingPlan: React.FC = () => (
  <section className="book-writing-plan-section theme-indigo parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="book-writing-plan-inner">
      <h2 className="book-writing-plan-title">Book Writing Plan: 28 Class Topics</h2>
      <ol className="book-writing-plan-list stagger-list">
        {topics.map((topic, idx) => (
          <li className="float-icon" key={idx}><span className="topic-number">{idx + 1}.</span> {topic}</li>
        ))}
      </ol>

      <div className="book-writing-plan-bonus">
        <div className="bonus-icon">✨</div>
        <h3 className="bonus-title">Publishing Support</h3>
        <p className="bonus-text">
          Once your book is ready, <strong>Publishing Guidance and ISBN Number will be provided as free</strong> to help you get your work published and distributed successfully.
        </p>
      </div>
    </div>
  </section>
);

export default BookWritingPlan;
