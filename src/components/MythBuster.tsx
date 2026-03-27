import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard'; // Path check kar lena
import './MythBuster.css';

interface MythCardType {
  id: number;
  myth: string;
  fact: string;
}

const myths: MythCardType[] = [
  {
    id: 1,
    myth: "Irregular cycles always mean you have PCOS.",
    fact: "Irregularity can be caused by stress, weight changes, thyroid issues, or simply being a teenager. PCOS is just one possibility."
  },
  {
    id: 2,
    myth: "Painful periods are just something you have to endure.",
    fact: "Severe pain that disrupts daily life is not normal and could indicate conditions like Endometriosis or Fibroids."
  },
  {
    id: 3,
    myth: "You can't get pregnant during your period.",
    fact: "While unlikely, sperm can live inside the body for up to 5 days, so early ovulation could overlap with your period."
  },
  {
    id: 4,
    myth: "Cravings are just a lack of willpower.",
    fact: "Hormonal shifts, especially progesterone peaks, naturally increase your body's metabolic rate and desire for energy-dense foods."
  }
];

const MythBuster: React.FC = () => {
  return (
    <section className="myth-section" id="truth">
      <div className="container">
        <div className="myth-header">
          <h2 className="section-title">Decode the <span className="text-gradient">Noise.</span></h2>
          <p className="section-subtitle">Separate fact from fiction with clinically-verified insights.</p>
        </div>

        <div className="myth-scroll-area">
          <div className="myth-track">
            {myths.map((item) => (
              <SpotlightCard
                key={item.id}
                className="myth-card"
                spotlightColor="rgba(255, 107, 107, 0.2)"
              >
                <div className="myth-card-content">
                  <div className="myth-top">
                    <span className="myth-label">
                      <Info size={14} /> Common Myth
                    </span>
                    <h4 className="myth-statement">"{item.myth}"</h4>
                  </div>

                  <div className="myth-divider"></div>

                  <div className="myth-bottom">
                    <div className="fact-label">
                      <CheckCircle2 size={14} /> Medical Fact
                    </div>
                    <p className="fact-description">{item.fact}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythBuster;