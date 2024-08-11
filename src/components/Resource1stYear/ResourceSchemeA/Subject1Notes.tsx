import React from 'react';

interface Resource {
  title: string;
  description: string;
  rating: number;
}

const resources: Resource[] = [
  { title: 'Resource 1', description: 'Lorem ipsum dolor sit amet Non voluptatum ', rating: 4 },
  { title: 'Resource 1', description: 'Lorem ipsum dolor sit amet Non voluptatum ', rating: 5 },
  { title: 'Resource 1', description: 'Lorem ipsum dolor sit amet Non voluptatum ', rating: 3 },
  { title: 'Resource 1', description: 'Lorem ipsum dolor sit amet Non voluptatum ', rating: 4 },
  { title: 'Resource 1', description: 'Lorem ipsum dolor sit amet Non voluptatum ', rating: 3 },
  { title: 'Resource 1', description: 'Lorem ipsum dolor sit amet Non voluptatum ', rating: 1 }

];

const Subject1Notes: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center py-2">
      {resources.map((resource, index) => (
        <div key={index} className="sm:max-w-sm p-6 m-4 bg-white rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-3 sm:mb-5">
            <h2 className="text-xl font-bold text-purple-700">{resource.title}</h2>
          <div className="flex ">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i} 
                xmlns="http://www.w3.org/2000/svg"
                className={`sm:w-6 sm:h-6 w-4 ${i < resource.rating ? 'text-purple-500' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.386 4.26a1 1 0 00.95.69h4.478c.969 0 1.371 1.24.588 1.81l-3.63 2.638a1 1 0 00-.364 1.118l1.387 4.26c.3.921-.755 1.688-1.538 1.118l-3.63-2.638a1 1 0 00-1.176 0l-3.63 2.638c-.783.57-1.838-.197-1.538-1.118l1.387-4.26a1 1 0 00-.364-1.118L2.086 9.688c-.783-.57-.381-1.81.588-1.81h4.478a1 1 0 00.95-.69l1.386-4.26z" />
              </svg>
            ))}
          </div>
        </div>
          <p className="mt-2 font-thin text-gray-600">{resource.description}</p>
         
        </div>
      ))}
    </div>
  );
};

export default Subject1Notes;
