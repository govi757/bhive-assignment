import { useEffect, useState } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState<{ lat: number, lon: number } | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported');
    }
  }, []);

  return location;
};

export default useCurrentLocation;
