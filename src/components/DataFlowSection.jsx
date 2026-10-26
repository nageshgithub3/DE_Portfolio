export default function DataFlowSection() {
  return (
    <section className="py-10 border-t border-border-dark">
      <div className="container-main">

        {/* Outer frame */}
        <div
          className="relative w-full rounded-sm border border-border-dark overflow-hidden reveal"
          style={{
            background: "#131717",
            backgroundImage: "radial-gradient(circle, #252b2b 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <svg
            viewBox="0 0 900 390"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ display: "block", minHeight: "260px" }}
          >
            <defs>
              {/* Arrow marker */}
              <marker id="dfArrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
                <polygon points="0 0, 7 2.5, 0 5" fill="#D8B45A" opacity="0.55" />
              </marker>
              {/* Glow filters */}
              <filter id="dfGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="dfGlowSoft" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Flow paths for animateMotion */}
              <path id="flow1" d="M 186,97 L 278,97 L 456,192" />
              <path id="flow2" d="M 186,196 L 278,196 L 456,192" />
              <path id="flow3" d="M 186,296 L 278,296 L 456,192" />
            </defs>

            {/* ── Header ── */}
            <text x="28" y="30" fontFamily="Space Grotesk, sans-serif" fontSize="10"
              fontWeight="600" fill="#A5AAA5" letterSpacing="3" opacity="0.7">
              A BETTER PATH FROM SOURCE TO SIGNAL
            </text>
            <text x="872" y="30" textAnchor="end" fontFamily="Space Grotesk, sans-serif"
              fontSize="10" fill="#A5AAA5" letterSpacing="2" opacity="0.35">
              FIG. 01
            </text>

            {/* ════════ SOURCE BOXES ════════ */}

            {/* Box 1: CSV FILES */}
            <g>
              <rect x="28" y="58" width="158" height="64" rx="2"
                fill="#1A1F1F" stroke="#343939" strokeWidth="1" />
              <rect x="40" y="72" width="32" height="32" rx="2"
                fill="rgba(216,180,90,0.1)" stroke="rgba(216,180,90,0.28)" strokeWidth="1" />
              <ellipse cx="56" cy="80" rx="9" ry="3.5" fill="none" stroke="#D8B45A" strokeWidth="1.4" />
              <rect x="47" y="80" width="18" height="9" fill="none" stroke="#D8B45A" strokeWidth="1.4" />
              <ellipse cx="56" cy="89" rx="9" ry="3.5" fill="none" stroke="#D8B45A" strokeWidth="1.4" />
              <line x1="47" y1="84.5" x2="65" y2="84.5" stroke="#D8B45A" strokeWidth="0.8" opacity="0.4" />
              <text x="80" y="85" fontFamily="Space Grotesk, sans-serif" fontSize="11"
                fontWeight="600" fill="#F2F0E8" letterSpacing="1">CSV FILES</text>
              <text x="80" y="100" fontFamily="Inter, sans-serif" fontSize="9"
                fill="#A5AAA5">Flat Files · Excel</text>
            </g>

            {/* Box 2: MYSQL DB */}
            <g>
              <rect x="28" y="162" width="158" height="64" rx="2"
                fill="#1A1F1F" stroke="#343939" strokeWidth="1" />
              <rect x="40" y="176" width="32" height="32" rx="2"
                fill="rgba(68,121,161,0.13)" stroke="rgba(68,121,161,0.38)" strokeWidth="1" />
              <ellipse cx="56" cy="184" rx="9" ry="3" fill="none" stroke="#4479A1" strokeWidth="1.4" />
              <rect x="47" y="184" width="18" height="10" fill="none" stroke="#4479A1" strokeWidth="1.4" />
              <ellipse cx="56" cy="194" rx="9" ry="3" fill="none" stroke="#4479A1" strokeWidth="1.4" />
              <line x1="47" y1="189" x2="65" y2="189" stroke="#4479A1" strokeWidth="0.8" opacity="0.5" />
              <text x="80" y="189" fontFamily="Space Grotesk, sans-serif" fontSize="11"
                fontWeight="600" fill="#F2F0E8" letterSpacing="1">MYSQL DB</text>
              <text x="80" y="204" fontFamily="Inter, sans-serif" fontSize="9"
                fill="#A5AAA5">Relational DB</text>
            </g>

            {/* Box 3: JSON / API */}
            <g>
              <rect x="28" y="262" width="158" height="64" rx="2"
                fill="#1A1F1F" stroke="#343939" strokeWidth="1" />
              <rect x="40" y="276" width="32" height="32" rx="2"
                fill="rgba(143,181,155,0.11)" stroke="rgba(143,181,155,0.32)" strokeWidth="1" />
              <circle cx="56" cy="292" r="3.5" fill="#8FB59B" />
              <path d="M 49,286 Q 56,280 63,286" fill="none" stroke="#8FB59B"
                strokeWidth="1.4" strokeLinecap="round" />
              <path d="M 45,283 Q 56,274 67,283" fill="none" stroke="#8FB59B"
                strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
              <text x="80" y="289" fontFamily="Space Grotesk, sans-serif" fontSize="11"
                fontWeight="600" fill="#F2F0E8" letterSpacing="1">JSON / API</text>
              <text x="80" y="304" fontFamily="Inter, sans-serif" fontSize="9"
                fill="#A5AAA5">REST · Batch</text>
            </g>

            {/* ════════ HORIZONTAL DASHED CONNECTORS ════════ */}
            <line x1="186" y1="90" x2="278" y2="90" stroke="#343939" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="186" y1="194" x2="278" y2="194" stroke="#343939" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="186" y1="294" x2="278" y2="294" stroke="#343939" strokeWidth="1" strokeDasharray="4 4" />

            {/* ════════ VERTICAL DASHED REFERENCE LINE ════════ */}
            <line x1="278" y1="44" x2="278" y2="355" stroke="#343939" strokeWidth="1" strokeDasharray="5 5" />

            {/* Dots on vertical line */}
            <circle cx="278" cy="90" r="4.5" fill="#D8B45A" filter="url(#dfGlowSoft)" />
            <circle cx="278" cy="194" r="4.5" fill="#D8B45A" filter="url(#dfGlowSoft)" />
            <circle cx="278" cy="294" r="4.5" fill="#D8B45A" filter="url(#dfGlowSoft)" />

            {/* Axis labels */}
            <text x="288" y="94" fontFamily="Inter, sans-serif" fontSize="10"
              fill="#A5AAA5" fontStyle="italic">validate</text>
            <text x="288" y="312" fontFamily="Inter, sans-serif" fontSize="10"
              fill="#A5AAA5" fontStyle="italic">transform</text>

            {/* ════════ CONVERGING LINES TO CENTER ORB ════════ */}
            <line x1="278" y1="90"  x2="386" y2="190" stroke="#2E3535" strokeWidth="1.2" />
            <line x1="278" y1="194" x2="386" y2="192" stroke="#2E3535" strokeWidth="1.2" />
            <line x1="278" y1="294" x2="386" y2="194" stroke="#2E3535" strokeWidth="1.2" />

            {/* ════════ ANIMATED FLOW DOTS ════════ */}
            {/* CSV → center (gold) */}
            <circle r="3.5" fill="#D8B45A" opacity="0.9" filter="url(#dfGlowSoft)">
              <animateMotion dur="3.2s" repeatCount="indefinite" begin="0s">
                <mpath href="#flow1" />
              </animateMotion>
            </circle>
            {/* MySQL → center (blue) */}
            <circle r="3.5" fill="#4479A1" opacity="0.8" filter="url(#dfGlowSoft)">
              <animateMotion dur="3.8s" repeatCount="indefinite" begin="1.1s">
                <mpath href="#flow2" />
              </animateMotion>
            </circle>
            {/* API → center (green) */}
            <circle r="3.5" fill="#8FB59B" opacity="0.8" filter="url(#dfGlowSoft)">
              <animateMotion dur="4.2s" repeatCount="indefinite" begin="2.2s">
                <mpath href="#flow3" />
              </animateMotion>
            </circle>

            {/* ════════ CENTER ORB — DELTA LAKE / DATABRICKS ════════ */}
            {/* Outermost faint dashed ring */}
            <ellipse cx="456" cy="192" rx="98" ry="78" fill="none"
              stroke="rgba(216,180,90,0.06)" strokeWidth="1.5" strokeDasharray="5 8" />
            {/* Outer rotating orbit */}
            <ellipse cx="456" cy="192" rx="82" ry="65" fill="none"
              stroke="rgba(216,180,90,0.14)" strokeWidth="1" strokeDasharray="3 6">
              <animateTransform attributeName="transform" attributeType="XML"
                type="rotate" from="0 456 192" to="360 456 192" dur="18s" repeatCount="indefinite" />
            </ellipse>
            {/* Inner counter-rotating orbit */}
            <ellipse cx="456" cy="192" rx="66" ry="52" fill="none"
              stroke="rgba(216,180,90,0.22)" strokeWidth="1">
              <animateTransform attributeName="transform" attributeType="XML"
                type="rotate" from="0 456 192" to="-360 456 192" dur="12s" repeatCount="indefinite" />
            </ellipse>
            {/* Halo */}
            <circle cx="456" cy="192" r="46" fill="rgba(216,180,90,0.06)"
              stroke="rgba(216,180,90,0.38)" strokeWidth="1.5" filter="url(#dfGlow)" />
            {/* Core — breathing pulse */}
            <circle cx="456" cy="192" r="34" fill="rgba(216,180,90,0.18)"
              stroke="#D8B45A" strokeWidth="1.5">
              <animate attributeName="r" values="34;37;34" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.8;1" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Delta Lake stacked layers icon */}
            <rect x="442" y="179" width="28" height="6" rx="2" fill="#D8B45A" opacity="0.95" />
            <rect x="446" y="188" width="20" height="6" rx="2" fill="#D8B45A" opacity="0.7" />
            <rect x="450" y="197" width="12" height="6" rx="2" fill="#D8B45A" opacity="0.45" />

            {/* Orbiting bright dot — fast */}
            <circle cx="456" cy="127" r="4" fill="#D8B45A" filter="url(#dfGlowSoft)">
              <animateTransform attributeName="transform" attributeType="XML"
                type="rotate" from="0 456 192" to="360 456 192" dur="6s" repeatCount="indefinite" />
            </circle>
            {/* Orbiting dim dot — slow, opposite */}
            <circle cx="456" cy="257" r="2.8" fill="#D8B45A" opacity="0.5">
              <animateTransform attributeName="transform" attributeType="XML"
                type="rotate" from="180 456 192" to="540 456 192" dur="9s" repeatCount="indefinite" />
            </circle>

            {/* RELIABLE PIPELINES label */}
            <text x="456" y="257" textAnchor="middle" fontFamily="Space Grotesk, sans-serif"
              fontSize="9.5" fontWeight="700" fill="#A5AAA5" letterSpacing="2.5">RELIABLE</text>
            <text x="456" y="271" textAnchor="middle" fontFamily="Space Grotesk, sans-serif"
              fontSize="9.5" fontWeight="700" fill="#A5AAA5" letterSpacing="2.5">PIPELINES</text>
            {/* Sub-label */}
            <text x="456" y="148" textAnchor="middle" fontFamily="Inter, sans-serif"
              fontSize="8" fill="#D8B45A" opacity="0.6" letterSpacing="1">DATABRICKS · DELTA LAKE</text>

            {/* ════════ LINE FROM ORB → OUTPUT ════════ */}
            <line x1="502" y1="192" x2="658" y2="192" stroke="#343939" strokeWidth="1.2"
              markerEnd="url(#dfArrow)" />
            {/* Animated dot flowing orb → output */}
            <circle r="3" fill="#D8B45A" opacity="0.75">
              <animateMotion dur="2.5s" repeatCount="indefinite"
                path="M 502,192 L 658,192" />
            </circle>

            {/* ════════ RIGHT OUTPUT — POWER BI / TRUSTED DATA ════════ */}
            <circle cx="720" cy="192" r="52" fill="none"
              stroke="rgba(216,180,90,0.14)" strokeWidth="1.5" />
            <circle cx="720" cy="192" r="40" fill="rgba(216,180,90,0.05)"
              stroke="rgba(216,180,90,0.28)" strokeWidth="1.2" />
            {/* Pulsing bullseye */}
            <circle cx="720" cy="192" r="14" fill="none" stroke="#D8B45A" strokeWidth="1.5">
              <animate attributeName="r" values="14;17;14" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="720" cy="192" r="4" fill="#D8B45A" filter="url(#dfGlowSoft)" />

            <text x="720" y="252" textAnchor="middle" fontFamily="Space Grotesk, sans-serif"
              fontSize="9.5" fontWeight="700" fill="#A5AAA5" letterSpacing="2.5">TRUSTED</text>
            <text x="720" y="266" textAnchor="middle" fontFamily="Space Grotesk, sans-serif"
              fontSize="9.5" fontWeight="700" fill="#A5AAA5" letterSpacing="2.5">DATA</text>
            <text x="720" y="164" textAnchor="middle" fontFamily="Inter, sans-serif"
              fontSize="8" fill="#D8B45A" opacity="0.65" letterSpacing="1">POWER BI</text>

            {/* ════════ BOTTOM SEPARATOR ════════ */}
            <line x1="28" y1="350" x2="872" y2="350" stroke="#343939" strokeWidth="0.8" opacity="0.5" />

            {/* ════════ BOTTOM PIPELINE STEPS ════════ */}
            {[
              { label: "INGEST",    x: 28  },
              { label: "VALIDATE",  x: 148 },
              { label: "TRANSFORM", x: 290 },
              { label: "DELIVER",   x: 442 },
            ].map((step, i, arr) => (
              <g key={step.label}>
                <text x={step.x} y="374" fontFamily="Space Grotesk, sans-serif"
                  fontSize="9" fontWeight="600" fill="#A5AAA5" letterSpacing="2">
                  {step.label}
                </text>
                {i < arr.length - 1 && (
                  <text
                    x={step.x + (arr[i + 1].x - step.x) / 2 - 5}
                    y="374"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="#343939"
                  >
                    →
                  </text>
                )}
              </g>
            ))}
          </svg>
        </div>

      </div>
    </section>
  );
}
