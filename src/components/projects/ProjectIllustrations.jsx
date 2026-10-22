import React from 'react';

export const ProjectIllustration = ({ projectId }) => {
  switch (projectId) {
    case 'mern-ecommerce':
      return (
        <div className="w-full h-36 sm:h-40 rounded-2xl bg-slate-900 overflow-hidden relative flex items-center justify-center p-3 shadow-inner">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Grid */}
            <pattern id="ecom-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(244, 63, 94, 0.12)" strokeWidth="1" />
            </pattern>
            <rect width="400" height="200" fill="url(#ecom-grid)" />

            {/* E-Commerce Window Frame */}
            <rect x="20" y="15" width="360" height="170" rx="10" fill="#0E0C13" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1.5" />
            <circle cx="38" cy="30" r="4" fill="#F43F5E" />
            <circle cx="52" cy="30" r="4" fill="#E11D48" opacity="0.6" />
            <circle cx="66" cy="30" r="4" fill="#881337" opacity="0.4" />
            <line x1="20" y1="42" x2="380" y2="42" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />

            {/* Sidebar Categories */}
            <rect x="32" y="54" width="65" height="12" rx="4" fill="#E11D48" fillOpacity="0.35" />
            <rect x="32" y="74" width="55" height="8" rx="3" fill="#FFFFFF" fillOpacity="0.15" />
            <rect x="32" y="88" width="60" height="8" rx="3" fill="#FFFFFF" fillOpacity="0.15" />
            <rect x="32" y="102" width="48" height="8" rx="3" fill="#FFFFFF" fillOpacity="0.15" />
            <rect x="32" y="116" width="58" height="8" rx="3" fill="#FFFFFF" fillOpacity="0.15" />

            {/* Product Card 1 */}
            <g className="transition-transform duration-300 hover:scale-105">
              <rect x="110" y="54" width="75" height="115" rx="8" fill="#181320" stroke="rgba(244, 63, 94, 0.5)" strokeWidth="1" />
              <rect x="118" y="62" width="59" height="42" rx="4" fill="#2A1422" />
              {/* Product Shape Graphic */}
              <circle cx="147" cy="83" r="14" fill="#E11D48" fillOpacity="0.7" />
              <path d="M140 83 L147 76 L154 83 L147 90 Z" fill="#FFF" fillOpacity="0.9" />
              <rect x="118" y="112" width="45" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
              <rect x="118" y="122" width="30" height="6" rx="2" fill="#F43F5E" fillOpacity="0.9" />
              <rect x="118" y="142" width="59" height="18" rx="4" fill="#E11D48" fillOpacity="0.4" stroke="rgba(244,63,94,0.6)" />
              <text x="133" y="154" fill="#FFF" fontSize="8" fontFamily="monospace" fontWeight="bold">BUY</text>
            </g>

            {/* Product Card 2 */}
            <rect x="195" y="54" width="75" height="115" rx="8" fill="#15121B" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            <rect x="203" y="62" width="59" height="42" rx="4" fill="#1E1925" />
            <circle cx="232" cy="83" r="12" fill="#FDA4AF" fillOpacity="0.4" />
            <rect x="203" y="112" width="50" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.6" />
            <rect x="203" y="122" width="35" height="6" rx="2" fill="#F43F5E" fillOpacity="0.7" />
            <rect x="203" y="142" width="59" height="18" rx="4" fill="#FFFFFF" fillOpacity="0.12" />

            {/* Cart & Analytics Floating Widget */}
            <rect x="280" y="54" width="88" height="115" rx="8" fill="#1A1220" stroke="rgba(244, 63, 94, 0.45)" strokeWidth="1" />
            <text x="290" y="70" fill="#FDA4AF" fontSize="9" fontFamily="monospace" fontWeight="bold">SALES METRIC</text>
            <path d="M290 120 Q310 90 325 105 T360 80" fill="none" stroke="#F43F5E" strokeWidth="2.5" />
            <circle cx="360" cy="80" r="3.5" fill="#FFF" stroke="#E11D48" strokeWidth="2" />
            <rect x="290" y="138" width="68" height="20" rx="4" fill="#E11D48" fillOpacity="0.25" />
            <text x="300" y="152" fill="#4ADE80" fontSize="9" fontFamily="monospace" fontWeight="bold">+42.8%</text>
          </svg>
        </div>
      );

    case '3d-developer-portfolio':
      return (
        <div className="w-full h-36 sm:h-40 rounded-2xl bg-slate-900 overflow-hidden relative flex items-center justify-center p-3 shadow-inner">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 3D Orbit Coordinates Background */}
            <circle cx="200" cy="100" r="75" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="200" cy="100" rx="140" ry="45" stroke="rgba(244, 63, 94, 0.35)" strokeWidth="1.5" transform="rotate(-15 200 100)" />
            <ellipse cx="200" cy="100" rx="120" ry="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" transform="rotate(25 200 100)" />

            {/* Futuristic 3D Robot Head Graphic */}
            <g transform="translate(150, 45)">
              {/* Head outer chassis */}
              <rect x="15" y="15" width="70" height="60" rx="12" fill="#231728" stroke="#F43F5E" strokeWidth="2" />
              {/* Visor screen */}
              <rect x="23" y="27" width="54" height="28" rx="6" fill="#08070B" stroke="rgba(244,63,94,0.7)" strokeWidth="1" />
              {/* Glowing eyes */}
              <circle cx="38" cy="41" r="5" fill="#FFFFFF" />
              <circle cx="62" cy="41" r="5" fill="#FFFFFF" />
              <circle cx="38" cy="41" r="2" fill="#F43F5E" />
              <circle cx="62" cy="41" r="2" fill="#F43F5E" />
              {/* Ear bolts */}
              <rect x="8" y="32" width="7" height="18" rx="2" fill="#E11D48" />
              <rect x="85" y="32" width="7" height="18" rx="2" fill="#E11D48" />
              {/* Neck & Body base */}
              <path d="M40 75 L60 75 L70 95 L30 95 Z" fill="#170F20" stroke="rgba(244,63,94,0.5)" strokeWidth="1" />
            </g>

            {/* HUD Coordinate Overlays */}
            <text x="35" y="45" fill="#F43F5E" fontSize="9" fontFamily="monospace">CAM_POS [0.0, 1.2, 7.2]</text>
            <text x="35" y="62" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace">FPS: 60.0 | VERT: 4,120</text>
            <path d="M35 72 L110 72" stroke="rgba(244,63,94,0.4)" strokeWidth="1" />

            <text x="280" y="150" fill="#FDA4AF" fontSize="9" fontFamily="monospace">R3F / SHADERS</text>
            <text x="280" y="165" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace">GL_LINEAR_MIPMAP</text>
            <circle cx="270" cy="148" r="3" fill="#4ADE80" />
          </svg>
        </div>
      );

    case 'auth-role-dashboard':
      return (
        <div className="w-full h-36 sm:h-40 rounded-2xl bg-slate-900 overflow-hidden relative flex items-center justify-center p-3 shadow-inner">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cyber Grid & Security Shield */}
            <rect x="25" y="20" width="350" height="160" rx="10" fill="#0E0C13" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1.5" />
            <line x1="25" y1="50" x2="375" y2="50" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />

            {/* Left Auth Matrix Tree */}
            <rect x="40" y="65" width="90" height="24" rx="6" fill="#1F1422" stroke="rgba(244,63,94,0.6)" strokeWidth="1" />
            <circle cx="54" cy="77" r="4" fill="#4ADE80" />
            <text x="64" y="80" fill="#FFF" fontSize="8" fontFamily="monospace">SUPER_ADMIN</text>

            <rect x="40" y="98" width="90" height="24" rx="6" fill="#17101C" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <circle cx="54" cy="110" r="4" fill="#FBBF24" />
            <text x="64" y="113" fill="#EEE" fontSize="8" fontFamily="monospace">ORG_MANAGER</text>

            <rect x="40" y="131" width="90" height="24" rx="6" fill="#17101C" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <circle cx="54" cy="143" r="4" fill="#60A5FA" />
            <text x="64" y="146" fill="#BBB" fontSize="8" fontFamily="monospace">USER_CLIENT</text>

            {/* Central Security Shield */}
            <g transform="translate(160, 60)">
              <path d="M40 5 L75 18 V50 C75 75 40 90 40 90 C40 90 5 75 5 50 V18 L40 5 Z" fill="#241426" stroke="#F43F5E" strokeWidth="2" />
              {/* Lock Core */}
              <rect x="28" y="44" width="24" height="20" rx="3" fill="#E11D48" />
              <path d="M33 44 V34 C33 29 47 29 47 34 V44" stroke="#FFF" strokeWidth="2.5" fill="none" />
              <circle cx="40" cy="53" r="2.5" fill="#FFF" />
            </g>

            {/* Right JWT Status Terminal */}
            <rect x="260" y="65" width="100" height="90" rx="6" fill="#160F1B" stroke="rgba(244,63,94,0.4)" strokeWidth="1" />
            <text x="270" y="82" fill="#F43F5E" fontSize="8" fontFamily="monospace" fontWeight="bold">JWT STATUS: 200</text>
            <text x="270" y="98" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="monospace">SHA-256 SIGNED</text>
            <text x="270" y="112" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="monospace">EXP: 86400s</text>
            <rect x="270" y="125" width="80" height="18" rx="4" fill="#E11D48" fillOpacity="0.35" />
            <text x="280" y="137" fill="#FFF" fontSize="7" fontFamily="monospace" fontWeight="bold">VERIFIED KEY</text>
          </svg>
        </div>
      );

    case 'creative-business-saas':
      return (
        <div className="w-full h-36 sm:h-40 rounded-2xl bg-slate-900 overflow-hidden relative flex items-center justify-center p-3 shadow-inner">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SaaS Platform Bento Dashboard */}
            <rect x="20" y="15" width="360" height="170" rx="10" fill="#0E0C13" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1.5" />
            <line x1="20" y1="42" x2="380" y2="42" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            <circle cx="36" cy="28" r="4" fill="#F43F5E" />
            <circle cx="48" cy="28" r="4" fill="#E11D48" opacity="0.6" />
            <circle cx="60" cy="28" r="4" fill="#881337" opacity="0.4" />

            {/* Bento Tile 1: Growth Chart */}
            <rect x="35" y="55" width="150" height="115" rx="8" fill="#1C1422" stroke="rgba(244,63,94,0.5)" strokeWidth="1" />
            <text x="48" y="73" fill="#FDA4AF" fontSize="9" fontFamily="monospace" fontWeight="bold">REVENUE CONVERSION</text>
            <path d="M48 135 L80 120 L115 130 L145 95 L170 85" fill="none" stroke="#F43F5E" strokeWidth="2.5" />
            <circle cx="170" cy="85" r="4" fill="#FFF" stroke="#E11D48" strokeWidth="2" />
            <text x="48" y="153" fill="#4ADE80" fontSize="11" fontFamily="monospace" fontWeight="bold">$94,250.00</text>

            {/* Bento Tile 2: Subscription Tiers */}
            <rect x="198" y="55" width="168" height="52" rx="8" fill="#18121D" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="210" y="73" fill="#FFF" fontSize="8" fontFamily="monospace">ENTERPRISE PLAN</text>
            <rect x="210" y="82" width="90" height="12" rx="3" fill="#E11D48" fillOpacity="0.4" />
            <rect x="310" y="65" width="45" height="32" rx="6" fill="#F43F5E" fillOpacity="0.25" stroke="rgba(244,63,94,0.6)" />
            <text x="320" y="85" fill="#FFF" fontSize="10" fontFamily="monospace" fontWeight="bold">99%</text>

            {/* Bento Tile 3: Team Speed */}
            <rect x="198" y="118" width="168" height="52" rx="8" fill="#18121D" stroke="rgba(244,63,94,0.4)" strokeWidth="1" />
            <text x="210" y="136" fill="#FDA4AF" fontSize="8" fontFamily="monospace">PERFORMANCE INDEX</text>
            <rect x="210" y="148" width="120" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.15" />
            <rect x="210" y="148" width="105" height="6" rx="3" fill="#E11D48" />
            <text x="340" y="154" fill="#4ADE80" fontSize="9" fontFamily="monospace">A+</text>
          </svg>
        </div>
      );

    case 'collab-task-kanban':
    default:
      return (
        <div className="w-full h-36 sm:h-40 rounded-2xl bg-slate-900 overflow-hidden relative flex items-center justify-center p-3 shadow-inner">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Collaborative Kanban Board */}
            <rect x="20" y="15" width="360" height="170" rx="10" fill="#0E0C13" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1.5" />
            <line x1="20" y1="42" x2="380" y2="42" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            <text x="36" y="32" fill="#FDA4AF" fontSize="9" fontFamily="monospace" fontWeight="bold">SPRINT #14 - KANBAN</text>

            {/* Column 1: TODO */}
            <rect x="35" y="55" width="100" height="115" rx="6" fill="#17121D" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <text x="45" y="70" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace">TO DO [3]</text>
            <rect x="43" y="78" width="84" height="32" rx="4" fill="#241728" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <rect x="50" y="86" width="50" height="5" rx="2" fill="#FFF" fillOpacity="0.8" />
            <rect x="50" y="96" width="30" height="4" rx="2" fill="#E11D48" />

            {/* Column 2: IN PROGRESS */}
            <rect x="150" y="55" width="100" height="115" rx="6" fill="#201328" stroke="rgba(244,63,94,0.5)" strokeWidth="1" />
            <text x="160" y="70" fill="#F43F5E" fontSize="8" fontFamily="monospace" fontWeight="bold">IN PROGRESS [2]</text>
            <rect x="158" y="78" width="84" height="42" rx="4" fill="#301630" stroke="rgba(244,63,94,0.7)" strokeWidth="1" />
            <rect x="165" y="86" width="60" height="5" rx="2" fill="#FFF" />
            <rect x="165" y="96" width="40" height="5" rx="2" fill="#FDA4AF" />
            <circle cx="230" cy="108" r="5" fill="#E11D48" />

            {/* Column 3: DONE */}
            <rect x="265" y="55" width="100" height="115" rx="6" fill="#15111A" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <text x="275" y="70" fill="#4ADE80" fontSize="8" fontFamily="monospace">COMPLETED [8]</text>
            <rect x="273" y="78" width="84" height="32" rx="4" fill="#1B1622" stroke="rgba(74,222,128,0.4)" strokeWidth="1" />
            <rect x="280" y="86" width="55" height="5" rx="2" fill="#FFF" fillOpacity="0.7" />
            <path d="M280 98 L285 102 L295 92" stroke="#4ADE80" strokeWidth="2" fill="none" />
          </svg>
        </div>
      );
  }
};
