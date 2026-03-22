import InterestsFeed from './_components/InterestsFeed';
import { getInterestFeed } from './_lib/getInterestData';

export default function InterestsPage() {
  const items = getInterestFeed();

  return (
    <div className="container mx-auto px-4 pt-6 pb-12 bg-gray-50 min-h-screen">
      <section className="mb-4 mx-auto pt-4 pb-2 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          General Interests
        </h2>
        <hr className="my-6 border-gray-300" />
        <ul className="list-none space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-xl">🛠️</span>
            <span>
              <span className="font-medium text-gray-800">DIY Tinkerer:</span> From speaker
              builds to wrangling my home server.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-xl">📚</span>
            <span>
              Attempting to bend my brain around theoretical physics and advanced math
              (results may vary).
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-xl">🏎️</span>
            <span>Need for Speed: catching F1 races and occasionally hitting the track.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-xl">⚽</span>
            <span>Football fanatic: mostly glued to the Premier League action.</span>
          </li>
        </ul>
        <hr className="my-6 border-gray-300" />
      </section>

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
        DIY Projects Showcase
      </h2>

      <InterestsFeed items={items} />
    </div>
  );
}
