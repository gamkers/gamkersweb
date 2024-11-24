import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';

const workshops = [
  {
    title: 'Ethical Hacking Basics',
    link: 'https://youtu.be/N4UzREeDUH8?si=taMUeRWqqNC_QQpi',
    thumbnail: 'https://img.youtube.com/vi/N4UzREeDUH8/0.jpg',
  },
  {
    title: 'Network Hacking Basics',
    link: 'https://youtu.be/S8XiBBwp95U?si=Sz6VaMXX4AYM_Gsp',
    thumbnail: 'https://img.youtube.com/vi/S8XiBBwp95U/0.jpg',
  },
  {
    title: 'Python Workshop',
    link: 'https://youtu.be/OspiqFAmv0Q?si=dp9OZbG_zh5bzlqC',
    thumbnail: 'https://img.youtube.com/vi/OspiqFAmv0Q/0.jpg',
  },
];

export default function Workshops() {
  return (
    <>
      <div className="workshops-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="workshops-title">Workshops</h1>
          <p className="workshops-description">
            Watch our recorded workshop sessions
          </p>
          <div className="workshops-list">
            {workshops.map((workshop, index) => (
              <Card key={index} className="workshop-card">
                <CardHeader>
                  <img
                    src={workshop.thumbnail}
                    alt={`${workshop.title} thumbnail`}
                    className="workshop-thumbnail"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="workshop-title-text">{workshop.title}</CardTitle>
                  <Button
                    as="a"
                    href={workshop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="workshop-button"
                  >
                    <Play className="play-icon" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .workshops-container {
          background-color: black; /* Gray background */
          padding: 2rem;
          border-radius: 12px; /* Rounded corners for the container */
        }

        .workshops-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .workshops-description {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.2rem;
          color: #555;
        }

        .workshops-list {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .workshop-card {
          width: 320px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 12px;
        }

        .workshop-thumbnail {
          width: 100%;
          height: 180px;
          border-radius: 10px;
          object-fit: cover;
        }

        .workshop-title-text {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
        }

        .workshop-button {
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 0.8rem;
        }

        .play-icon {
          margin-right: 0.5rem;
          width: 18px;
          height: 18px;
        }
      `}</style>
    </>
  );
}
