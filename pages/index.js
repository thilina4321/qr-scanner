import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

const Home = () => {
  useEffect(() => {
    setupHandler();
  }, []);

  const setupHandler = async () => {
    const video = document.querySelector("video");
    const textElem = document.querySelector("[data-text]");

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    video.srcObject = stream;

    video.addEventListener("playing", async () => {
      const worker = createWorker();
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");

      const canvas = document.createElement("canvas");
      canvas.width = video.width;
      canvas.height = video.height;

      document.addEventListener("keypress", async (e) => {
        if (e.code !== "Space") return;
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, video.width, video.height);
        const {
          data: { text },
        } = await worker.recognize(canvas);

        console.log(text);

        speechSynthesis.speak(
          new SpeechSynthesisUtterance(text.replace(/\s/g, " "))
        );

        textElem.textContent = text;
      });
    });
  };

  return (
    <div className="section">
      <h1> Audio Book Application </h1>
      <video width="720" height="560" autoPlay muted></video>
      <pre
        data-text
        style={{
          fontSize: "2rem",
          fontFamily: "inherit",
          width: "100%",
          whiteSpace: "pre-wrap",
        }}
      ></pre>
    </div>
  );
};

export default Home;
