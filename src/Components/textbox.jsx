import React, { useState } from "react";

const TextBox = () => {
  const [expanded, setExpanded] = useState(false);
  const text =
    "This is a good way to fight against corruptiongfdgfisdlkfjdlfkjdsflsdfjdslfdsl;efkfsl;gkfldjasfljejaeirjerioarjserioewjroiwejrieojawoiejwpoierjweopirjeioprwjeioewjewoirjweoijrseafsjriljerelijriowjrwoierjwoirjwiorjwoirwjoirjrioj4roi4rjwoirjhweoiajeiorjoietjerporejoirwejreksrjfiosjfioerjewoirjewioreuroiewuroieureoirueoiruoiwujroiujowi4rj4eorjewoirjweoirjweoirjriotrjtioerjtiorjirohjroierjhoeiwuroiewurioew4jfaldk";

  const toggleText = () => setExpanded(!expanded);

  return (
    <div className="box" onClick={toggleText}>
      <p className={`text ${expanded ? "expand" : ""}`}>
        {!expanded ? (
          <>
            {text.slice(0, 100)} {/* Show partial text */}
            <span className="view-more">... view more</span>
          </>
        ) : (
          <>
            {text}
            <span className="view-more"> view less</span>
          </>
        )}
      </p>
    </div>
  );
};

export default TextBox;