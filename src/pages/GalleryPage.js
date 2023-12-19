import { React } from "react";
import ImageGallery from "react-image-gallery";

function GalleryPage() {
  const images = [
    {
      original: "images/daniel-professional-pic.jpg",
      thumbnail: "images/daniel-professional-pic.jpg",
      description: `Myself, nice to meet you!`,
      originalHeight: "450px",
    },
    {
      original: "images/daniel-family-mexico-pyramid.jpg",
      thumbnail: "images/daniel-family-mexico-pyramid.jpg",
      description: "My family trip to the temple of Chichen Itza, Mexico.",
      originalHeight: "450px",
    },
    {
      original: "images/daniel-cenotes-mexico.JPG",
      thumbnail: "images/daniel-cenotes-mexico.JPG",
      description: "Cenotes caves in Mexico!",
      originalHeight: "450px",
    },
    {
      original: "images/daniel-horse-back-riding.jpg",
      thumbnail: "images/daniel-horse-back-riding.jpg",
      description: `Horseback riding in Mexico!`,
      originalHeight: "450px",
    },
    {
      original: "images/daniel-github-account.png",
      thumbnail: "images/daniel-github-account.png",
      description: `My recent GitHub activity.`,
      originalHeight: "450px",
    },
    {
      original: "images/chess-variant-portfolio-project.png",
      thumbnail: "images/chess-variant-portfolio-project.png",
      description: `Code from my Chess variant project.`,
      originalHeight: "450px",
    },
    {
      original: "images/daniel-family-ny-stroll.jpg",
      thumbnail: "images/daniel-family-ny-stroll.jpg",
      description: `My wife and son going on a walk!`,
      originalHeight: "450px",
    },
    {
      original: "images/daniel-glass-ny-view.jpg",
      thumbnail: "images/daniel-glass-ny-view.jpg",
      description: `Visiting the SUMMIT in NYC.`,
      originalHeight: "450px",
    },
    {
      original: "images/daniel-linkedin-account.png",
      thumbnail: "images/daniel-linkedin-account.png",
      description: `My LinkedIn profile.`,
      originalHeight: "450px",
    },
    {
      original: "images/daniel-udemy-hobby.png",
      thumbnail: "images/daniel-udemy-hobby.png",
      description: `My hobby is taking classes on Udemy!`,
      originalHeight: "450px",
    },
  ];

  return (
    <>
      <section>
        <h2>Gallery of Daniel</h2>
        <p>Images I would like to share of my trips, hobbies, and projects</p>
        <article>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
          />
        </article>
      </section>
    </>
  );
}

export default GalleryPage;
