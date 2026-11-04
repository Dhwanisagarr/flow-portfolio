import React from "react";

export default function HeroIllustration({ className = "" }) {
  return (
    <div
      className={`hero-illustration-container relative w-full flex items-center justify-center select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 1000 680"
        className="w-full h-auto max-h-[56vh] drop-shadow-[0_15px_35px_rgba(70,40,10,0.25)] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Vertical Window Sunbeam Gradient */}
          <linearGradient id="sunbeamVertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fffce6" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#ffeb82" stopOpacity="0.65" />
            <stop offset="80%" stopColor="#f7c844" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#df9f24" stopOpacity="0.0" />
          </linearGradient>

          {/* Floor Window Light Patch */}
          <linearGradient id="sunFloorBeam" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#ffe988" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#f3be44" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#d89626" stopOpacity="0.15" />
          </linearGradient>

          {/* Table Wood Surface Gradients */}
          <linearGradient id="tableTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7ddbc" />
            <stop offset="45%" stopColor="#e8bf8e" />
            <stop offset="100%" stopColor="#cca06e" />
          </linearGradient>

          <linearGradient id="tableFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#be8a57" />
            <stop offset="100%" stopColor="#8d5a2d" />
          </linearGradient>

          <linearGradient id="tableLeg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#af7c4b" />
            <stop offset="35%" stopColor="#9a693b" />
            <stop offset="100%" stopColor="#764a21" />
          </linearGradient>

          {/* Girl's Organic Shading Gradients */}
          <linearGradient id="girlHair" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#aa6633" />
            <stop offset="35%" stopColor="#80461e" />
            <stop offset="80%" stopColor="#562a11" />
            <stop offset="100%" stopColor="#3d1b08" />
          </linearGradient>

          <linearGradient id="girlSkin" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffe3c5" />
            <stop offset="45%" stopColor="#f9cea5" />
            <stop offset="100%" stopColor="#e0a36e" />
          </linearGradient>

          <linearGradient id="girlSkinSunlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f8caa0" />
            <stop offset="65%" stopColor="#ffe6c0" />
            <stop offset="100%" stopColor="#fff5db" />
          </linearGradient>

          <linearGradient id="tShirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#faf6ef" />
            <stop offset="100%" stopColor="#e2d8c7" />
          </linearGradient>

          <linearGradient id="tShirtSunlit" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e8dfcf" />
            <stop offset="50%" stopColor="#fbf7ef" />
            <stop offset="100%" stopColor="#fff9ec" />
          </linearGradient>

          <linearGradient id="denimShorts" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b6c4cf" />
            <stop offset="50%" stopColor="#9baab8" />
            <stop offset="100%" stopColor="#738290" />
          </linearGradient>

          <linearGradient id="cushionBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2d6c2" />
            <stop offset="65%" stopColor="#bea994" />
            <stop offset="100%" stopColor="#937e6b" />
          </linearGradient>

          {/* Book Spine Gradients */}
          <linearGradient id="bookGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#556c48" />
            <stop offset="60%" stopColor="#6e8760" />
            <stop offset="100%" stopColor="#8da87c" />
          </linearGradient>

          <linearGradient id="bookRust" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8d3d19" />
            <stop offset="60%" stopColor="#b75629" />
            <stop offset="100%" stopColor="#dc723e" />
          </linearGradient>

          <linearGradient id="bookGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b77c12" />
            <stop offset="60%" stopColor="#e4a82a" />
            <stop offset="100%" stopColor="#f7c54d" />
          </linearGradient>

          <linearGradient id="bookSlate" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#434954" />
            <stop offset="60%" stopColor="#616876" />
            <stop offset="100%" stopColor="#7d8593" />
          </linearGradient>

          {/* Soft Blur Filter for realistic ambient shadows */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* =================================================================== */}
        {/* 1. ROOM ENVIRONMENT: Sunlight shafts, seamless floor line & shadows */}
        {/* =================================================================== */}

        {/* Horizontal floor dividing baseline */}
        <line x1="0" y1="520" x2="1000" y2="520" stroke="#5d310c" strokeWidth="2.5" />
        <line x1="0" y1="575" x2="1000" y2="575" stroke="#713c15" strokeWidth="1" opacity="0.35" />
        <line x1="0" y1="630" x2="1000" y2="630" stroke="#683713" strokeWidth="1" opacity="0.35" />

        {/* 3 Radiant Window Sunbeams streaming from top to table */}
        <g className="sunbeams-window" opacity="0.95">
          {/* Ambient soft sunlight haze */}
          <rect x="490" y="0" width="165" height="520" fill="url(#sunbeamVertical)" opacity="0.35" filter="url(#softGlow)" />
          {/* Shaft 1 */}
          <rect x="515" y="0" width="28" height="520" fill="url(#sunbeamVertical)" />
          {/* Shaft 2 */}
          <rect x="556" y="0" width="30" height="520" fill="url(#sunbeamVertical)" />
          {/* Shaft 3 */}
          <rect x="600" y="0" width="30" height="520" fill="url(#sunbeamVertical)" />
          {/* Diagonal window cross-bar shadow */}
          <polygon points="505,330 645,260 645,274 505,344" fill="#c39324" opacity="0.4" />
        </g>

        {/* Floor Window Light Patch cast to the left */}
        <g className="sunbeams-floor" opacity="0.88">
          <polygon points="200,520 400,520 270,680 40,680" fill="url(#sunFloorBeam)" />
          {/* Window pane mullion lines on the floor */}
          <polygon points="120,580 280,580 260,592 100,592" fill="#9b621e" opacity="0.3" />
          <polygon points="275,520 287,520 185,680 173,680" fill="#9b621e" opacity="0.3" />
        </g>

        {/* Notes paper resting on the floor in the foreground */}
        <g transform="translate(490, 605) rotate(-3)">
          <rect x="0" y="0" width="108" height="52" rx="2" fill="#eed8b4" stroke="#cbb38d" strokeWidth="0.8" opacity="0.85" />
          <line x1="12" y1="13" x2="96" y2="13" stroke="#b39973" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="12" y1="23" x2="80" y2="23" stroke="#b39973" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="12" y1="33" x2="90" y2="33" stroke="#b39973" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="12" y1="43" x2="72" y2="43" stroke="#b39973" strokeWidth="0.8" strokeDasharray="3 3" />
        </g>

        {/* Deep ambient shadow under the low desk */}
        <ellipse cx="500" cy="522" rx="390" ry="18" fill="#4d270a" opacity="0.7" filter="url(#softGlow)" />

        {/* =================================================================== */}
        {/* 2. THE LOW WOODEN BENCH / TABLE */}
        {/* =================================================================== */}
        {/* Left Table Leg */}
        <rect x="155" y="415" width="46" height="105" rx="3" fill="url(#tableLeg)" />
        {/* Right Table Leg */}
        <rect x="798" y="415" width="46" height="105" rx="3" fill="url(#tableLeg)" />

        {/* Table Top 3D Slab */}
        <polygon points="110,390 890,390 912,412 88,412" fill="url(#tableTop)" />
        {/* Sunlight sheen on right half of table top */}
        <polygon points="510,390 670,390 695,412 535,412" fill="#fff7be" opacity="0.45" />
        {/* Front Lip of Table Slab */}
        <rect x="88" y="412" width="824" height="24" rx="2" fill="url(#tableFront)" />
        {/* Top edge golden highlight */}
        <line x1="88" y1="412" x2="912" y2="412" stroke="#ffebc2" strokeWidth="1.2" opacity="0.9" />
        {/* Bottom edge shadow */}
        <line x1="88" y1="436" x2="912" y2="436" stroke="#482205" strokeWidth="1.6" opacity="0.8" />

        {/* =================================================================== */}
        {/* 3. TABLE OBJECTS: Coffee Mug, Open Diary, Stack of Books */}
        {/* =================================================================== */}

        {/* --- OBJECT A: Coffee Mug on the Left --- */}
        <g className="hero-mug" transform="translate(235, 345)">
          {/* Wooden Coaster */}
          <ellipse cx="40" cy="50" rx="36" ry="7" fill="#753f1a" stroke="#5a2f12" strokeWidth="1" />

          {/* Animated Rising Steam Curves */}
          <g className="steam-group">
            <path
              d="M 33 22 Q 26 10 35 0 Q 43 -10 32 -22"
              fill="none"
              stroke="#fff9e0"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="animate-steam-1"
              opacity="0.85"
            />
            <path
              d="M 46 20 Q 53 8 44 -2 Q 35 -12 48 -24"
              fill="none"
              stroke="#fff9e0"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="animate-steam-2"
              opacity="0.7"
            />
          </g>

          {/* Yellow Mug Body */}
          <rect x="18" y="16" width="44" height="32" rx="6" fill="#f8cf42" stroke="#d49e18" strokeWidth="1.5" />
          {/* Mug Rim Opening */}
          <ellipse cx="40" cy="16" rx="22" ry="5.5" fill="#4d2a12" stroke="#d49e18" strokeWidth="1.2" />
          {/* Rich Dark Coffee Surface */}
          <ellipse cx="40" cy="17" rx="20" ry="4.5" fill="#2d1607" />
          <ellipse cx="38" cy="16.5" rx="7" ry="1.5" fill="#713f1d" opacity="0.65" />

          {/* Mug Handle */}
          <path
            d="M 18 20 C 5 20 4 40 18 42"
            fill="none"
            stroke="#f8cf42"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 18 20 C 5 20 4 40 18 42"
            fill="none"
            stroke="#c89212"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Heart Doodle on Front of Mug */}
          <path
            d="M 40 33 C 40 30 36 28 34 30 C 31 32 32 35 40 40 C 48 35 49 32 46 30 C 44 28 40 30 40 33 Z"
            fill="#6d4111"
          />
        </g>

        {/* --- OBJECT B: Open Diary in Center-Left --- */}
        <g className="hero-diary-open" transform="translate(335, 370)">
          {/* Book Drop Shadow on table */}
          <ellipse cx="80" cy="36" rx="78" ry="8" fill="#582f0f" opacity="0.45" />
          {/* Left Page */}
          <path
            d="M 75 32 C 45 28 15 30 2 34 L 18 8 C 35 6 60 7 75 12 Z"
            fill="#f7f2e4"
            stroke="#cebe9d"
            strokeWidth="1"
          />
          {/* Left Page Ruled Lines */}
          <line x1="22" y1="14" x2="65" y2="16" stroke="#b4a385" strokeWidth="0.8" opacity="0.6" />
          <line x1="20" y1="20" x2="67" y2="21" stroke="#b4a385" strokeWidth="0.8" opacity="0.6" />
          <line x1="18" y1="26" x2="68" y2="27" stroke="#b4a385" strokeWidth="0.8" opacity="0.6" />

          {/* Right Page */}
          <path
            d="M 75 12 C 90 7 115 6 132 8 L 148 34 C 135 30 105 28 75 32 Z"
            fill="#fffcf5"
            stroke="#cebe9d"
            strokeWidth="1"
          />
          {/* Right Page Ruled Lines */}
          <line x1="85" y1="16" x2="128" y2="14" stroke="#b4a385" strokeWidth="0.8" opacity="0.6" />
          <line x1="83" y1="21" x2="130" y2="20" stroke="#b4a385" strokeWidth="0.8" opacity="0.6" />
          <line x1="82" y1="27" x2="132" y2="26" stroke="#b4a385" strokeWidth="0.8" opacity="0.6" />
          {/* Spine Crease */}
          <line x1="75" y1="12" x2="75" y2="32" stroke="#877458" strokeWidth="1.5" />
        </g>

        {/* --- OBJECT C: Stack of 4 Books on the Right (FOCAL POINT) --- */}
        <g id="hero-books-stack" className="hero-books-stack" transform="translate(712, 328)">
          {/* Stack Base Shadow */}
          <ellipse cx="68" cy="80" rx="82" ry="8" fill="#4d260a" opacity="0.55" filter="url(#softGlow)" />

          {/* Book 1 (Bottom, Slate Gray) */}
          <g id="book-1-bottom">
            <rect x="0" y="58" width="132" height="20" rx="3" fill="url(#bookSlate)" stroke="#373c45" strokeWidth="0.8" />
            <polygon points="0,58 132,58 144,50 12,50" fill="#757c89" />
            <polygon points="132,58 144,50 144,66 132,76" fill="#fdfaf0" stroke="#d5cebe" strokeWidth="0.6" />
            <line x1="133" y1="62" x2="143" y2="54" stroke="#c0b8a5" strokeWidth="0.5" />
            <line x1="133" y1="68" x2="143" y2="60" stroke="#c0b8a5" strokeWidth="0.5" />
          </g>

          {/* Book 2 (Second, Golden Mustard Yellow) */}
          <g id="book-2-gold">
            <rect x="4" y="38" width="126" height="20" rx="3" fill="url(#bookGold)" stroke="#9c6b0e" strokeWidth="0.8" />
            <polygon points="4,38 130,38 140,30 14,30" fill="#f0b63b" />
            <polygon points="130,38 140,30 140,46 130,56" fill="#fffef7" stroke="#d5cebe" strokeWidth="0.6" />
            <line x1="131" y1="42" x2="139" y2="34" stroke="#c9bf9f" strokeWidth="0.5" />
            <line x1="131" y1="48" x2="139" y2="40" stroke="#c9bf9f" strokeWidth="0.5" />
          </g>

          {/* Book 3 (Third, Terracotta Rust) */}
          <g id="book-3-rust">
            <rect x="8" y="20" width="122" height="19" rx="3" fill="url(#bookRust)" stroke="#742d11" strokeWidth="0.8" />
            <polygon points="8,20 130,20 140,13 18,13" fill="#cf6736" />
            <polygon points="130,20 140,13 140,28 130,37" fill="#fbf7ec" stroke="#d5cebe" strokeWidth="0.6" />
            <line x1="131" y1="24" x2="139" y2="17" stroke="#cfc5ae" strokeWidth="0.5" />
            <line x1="131" y1="30" x2="139" y2="23" stroke="#cfc5ae" strokeWidth="0.5" />
          </g>

          {/* Book 4 (Top, Sage / Olive Green) */}
          <g id="book-4-green">
            <rect x="18" y="2" width="110" height="18" rx="3" fill="url(#bookGreen)" stroke="#425237" strokeWidth="0.8" />
            <polygon points="18,2 128,2 138,-5 28,-5" fill="#819a71" />
            <polygon points="128,2 138,-5 138,10 128,18" fill="#fcf9ee" stroke="#d5cebe" strokeWidth="0.6" />
            <line x1="129" y1="5" x2="137" y2="-2" stroke="#b9b19b" strokeWidth="0.5" />
            <line x1="129" y1="11" x2="137" y2="4" stroke="#b9b19b" strokeWidth="0.5" />
            <line x1="38" y1="11" x2="98" y2="11" stroke="#a4be94" strokeWidth="1.2" opacity="0.7" />
          </g>
        </g>

        {/* =================================================================== */}
        {/* 4. THE GIRL: Seated on cushion with headphones, reading & sketching */}
        {/* =================================================================== */}

        {/* Floor Cushion */}
        <g id="hero-cushion" transform="translate(385, 502)">
          <ellipse cx="140" cy="50" rx="148" ry="16" fill="#3c1c05" opacity="0.55" filter="url(#softGlow)" />
          <path
            d="M 25 35 C 10 20 60 5 140 5 C 220 5 270 20 255 35 C 240 50 200 62 140 62 C 80 62 40 50 25 35 Z"
            fill="url(#cushionBody)"
            stroke="#887563"
            strokeWidth="1.5"
          />
          <path d="M 20 38 Q 8 45 4 40 M 20 38 Q 12 50 6 52" stroke="#685545" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M 260 38 Q 272 45 276 40 M 260 38 Q 268 50 274 52" stroke="#685545" strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* Left Leg & Foot resting on floor (cozy natural posture within desk width) */}
        <g id="hero-legs">
          {/* Right foot tucked behind (toes peeking) */}
          <g id="hero-right-foot-tucked" opacity="0.85">
            <path
              d="M 235 504 C 245 498 265 496 280 502 C 285 510 275 518 260 520 Z"
              fill="#e8a872"
              stroke="#b57640"
              strokeWidth="1"
            />
            <circle cx="242" cy="502" r="3" fill="#f8cca0" />
            <circle cx="248" cy="500" r="2.6" fill="#f8cca0" />
            <circle cx="254" cy="500" r="2.4" fill="#f8cca0" />
          </g>

          {/* Main Left Thigh & Calf curving naturally to floor */}
          <path
            d="M 440 458 C 400 468 360 492 330 514 C 290 524 250 524 215 522 C 190 524 175 530 162 538 C 154 544 156 552 165 556 C 185 560 215 555 240 546 C 275 538 315 532 355 526 C 395 520 425 515 445 510 Z"
            fill="url(#girlSkinSunlight)"
            stroke="#c88a50"
            strokeWidth="1.2"
          />

          {/* Golden highlight along top crest of leg */}
          <path
            d="M 425 468 C 390 478 350 502 322 516 C 280 524 240 522 208 522"
            fill="none"
            stroke="#fff6dd"
            strokeWidth="3.5"
            opacity="0.65"
            strokeLinecap="round"
          />

          {/* Bare Foot & 5 Toes on floor resting within table boundary */}
          <g id="hero-toes">
            {/* Big toe */}
            <ellipse cx="158" cy="546" rx="6" ry="5" fill="#fecfa0" stroke="#c88a50" strokeWidth="0.8" />
            {/* Toe 2 */}
            <circle cx="165" cy="540" r="3.8" fill="#fecfa0" stroke="#c88a50" strokeWidth="0.8" />
            {/* Toe 3 */}
            <circle cx="172" cy="537" r="3.4" fill="#fecfa0" stroke="#c88a50" strokeWidth="0.8" />
            {/* Toe 4 */}
            <circle cx="178" cy="535" r="3" fill="#fecfa0" stroke="#c88a50" strokeWidth="0.8" />
            {/* Pinky toe */}
            <circle cx="184" cy="533" r="2.6" fill="#fecfa0" stroke="#c88a50" strokeWidth="0.8" />
          </g>
        </g>

        {/* Denim Shorts */}
        <g id="hero-shorts" transform="translate(435, 426)">
          <path
            d="M 30 20 C 10 35 5 70 20 95 C 35 115 75 118 95 100 C 105 118 150 115 165 95 C 178 70 172 35 150 20 C 120 15 65 15 30 20 Z"
            fill="url(#denimShorts)"
            stroke="#5c6a78"
            strokeWidth="1.5"
          />
          <path d="M 95 35 Q 96 75 97 100" stroke="#465462" strokeWidth="1.5" />
          <path
            d="M 38 48 C 36 68 45 82 65 82 C 80 82 86 68 85 48 Z"
            fill="none"
            stroke="#465462"
            strokeWidth="1.4"
            strokeDasharray="2 2"
          />
          <path
            d="M 105 48 C 104 68 112 82 130 82 C 148 82 154 68 152 48 Z"
            fill="none"
            stroke="#465462"
            strokeWidth="1.4"
            strokeDasharray="2 2"
          />
          <path d="M 28 85 Q 55 92 85 88" stroke="#465462" strokeWidth="1.2" opacity="0.6" />
          <path d="M 110 88 Q 138 92 162 85" stroke="#465462" strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* T-Shirt Torso */}
        <g id="hero-shirt">
          <path
            d="M 465 246 C 490 240 550 240 575 246 C 625 256 635 346 605 446 C 580 451 460 451 435 446 C 405 346 415 256 465 246 Z"
            fill="url(#tShirtSunlit)"
            stroke="#c8c0b2"
            strokeWidth="1.2"
          />
          {/* Subtle Crease Shadows */}
          <path d="M 460 316 Q 520 336 580 311" stroke="#c5bcae" strokeWidth="1.6" fill="none" opacity="0.7" />
          <path d="M 455 361 Q 520 381 585 356" stroke="#c5bcae" strokeWidth="1.8" fill="none" opacity="0.7" />
          <path d="M 470 406 Q 520 421 570 404" stroke="#c5bcae" strokeWidth="1.5" fill="none" opacity="0.65" />

          {/* Sleeves */}
          <path
            d="M 468 248 C 430 258 400 291 390 326 C 415 338 445 326 458 306 Z"
            fill="url(#tShirt)"
            stroke="#c8c0b2"
            strokeWidth="1.2"
          />
          <path
            d="M 572 248 C 610 258 640 291 650 326 C 625 338 595 326 582 306 Z"
            fill="url(#tShirtSunlit)"
            stroke="#c8c0b2"
            strokeWidth="1.2"
          />
        </g>

        {/* Left Arm resting beside open book */}
        <g id="hero-left-arm">
          <path
            d="M 425 320 C 390 360 375 415 395 420 C 415 425 450 385 462 340 Z"
            fill="url(#girlSkin)"
            stroke="#c88a50"
            strokeWidth="1.2"
          />
        </g>

        {/* Right Arm & Hand with Stylus/Pencil (Subtle creative hover animation) */}
        <g id="hero-right-arm-animated" className="hero-pencil-hand">
          <path
            d="M 618 316 C 655 346 655 396 640 411 C 625 421 605 386 592 341 Z"
            fill="url(#girlSkinSunlight)"
            stroke="#c88a50"
            strokeWidth="1.2"
          />
          <path
            d="M 635 401 C 665 376 675 326 670 276 C 660 271 650 281 645 316 C 640 351 628 391 635 401 Z"
            fill="url(#girlSkinSunlight)"
            stroke="#c88a50"
            strokeWidth="1"
          />
          {/* Hand holding pencil */}
          <g transform="translate(660, 251)">
            <ellipse cx="6" cy="15" rx="7" ry="11" fill="#fecfa0" stroke="#c88a50" strokeWidth="1" />
            <path d="M 3 10 Q -4 12 1 18 Q 8 20 8 13 Z" fill="#fecfa0" stroke="#c88a50" strokeWidth="0.8" />
            {/* Pencil */}
            <line x1="18" y1="-12" x2="-4" y2="35" stroke="#2a2927" strokeWidth="3" strokeLinecap="round" />
            <polygon points="-4,35 -6,40 -1,37" fill="#d49e18" />
            <polygon points="-6,40 -7,42 -4,41" fill="#2a2927" />
          </g>
        </g>

        {/* Neck & Hair Bun */}
        <g id="hero-head-hair">
          <path d="M 502 210 L 538 210 L 535 248 L 505 248 Z" fill="url(#girlSkin)" />
          {/* Head & Hair Base */}
          <ellipse cx="520" cy="175" rx="46" ry="48" fill="url(#girlHair)" />
          {/* Wispy hair strands */}
          <path d="M 495 205 Q 488 240 500 253" stroke="#5a2d10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 545 205 Q 552 240 540 253" stroke="#5a2d10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Messy Top Bun */}
          <circle cx="528" cy="113" r="28" fill="url(#girlHair)" stroke="#45220c" strokeWidth="1.5" />
          <circle cx="538" cy="105" r="14" fill="#84471e" opacity="0.65" />
          <ellipse cx="526" cy="133" rx="20" ry="7" fill="#361807" />
          {/* Sunlit Hair Highlights on right side */}
          <path d="M 500 155 Q 520 140 540 160" stroke="#a36232" strokeWidth="1.8" fill="none" opacity="0.65" />
          <path d="M 492 175 Q 520 160 548 180" stroke="#a36232" strokeWidth="1.8" fill="none" opacity="0.65" />
        </g>

        {/* Over-Ear Headphones & Music Sparks */}
        <g id="hero-headphones">
          <path
            d="M 465 183 C 455 110 585 110 575 183"
            fill="none"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M 465 183 C 455 110 585 110 575 183"
            fill="none"
            stroke="#d6d9de"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Earcups */}
          <ellipse cx="462" cy="193" rx="14" ry="20" fill="#f4f5f8" stroke="#c2c6ce" strokeWidth="2" />
          <ellipse cx="462" cy="193" rx="8" ry="14" fill="#dedfe5" />

          <ellipse cx="578" cy="193" rx="14" ry="20" fill="#f4f5f8" stroke="#c2c6ce" strokeWidth="2" />
          <ellipse cx="578" cy="193" rx="8" ry="14" fill="#dedfe5" />

          {/* Animated Music Sparks /// */}
          <g className="animate-music-sparks">
            <line x1="608" y1="173" x2="624" y2="163" stroke="#36291a" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="614" y1="189" x2="632" y2="187" stroke="#36291a" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="608" y1="205" x2="626" y2="211" stroke="#36291a" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
