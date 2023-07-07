import { useEffect, useState } from 'react';

import LocationListItem from '@/components/LocationListItem';
import { classNames } from '@/utils/utils';
import { useLocationContext } from '@/context/LocationContext';

interface Props {
  className: string;
}

const SearchByCity = ({ className }: Props) => {
  const { city, setCity } = useLocationContext();
  const [cities, setCities] = useState<GeoJSON.Feature[]>([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  let deleteTimeout: NodeJS.Timeout;

  const init = () => {
    setOpen(false);
    setInput('');
    setCities([]);
  };

  const doneTyping = async (value: string) => {
    if (value !== '') {
      try {
        const response = await fetch(
          `/api/geoapify?text=${value}&type=city&limit=3`
        );
        const result = await response.json();
        setCities([...result]);
      } catch (e) {
        console.error(e);
        setCities([]);
      }
    }
  };

  const openList = (value: string) => {
    if (value === '') {
      init();
    } else {
      setOpen(true);
    }
  };

  const onLocationSelect = (value: GeoJSON.Feature) => {
    setOpen(false);
    setCity(value);
  };

  useEffect(() => {
    if (
      city.properties?.address_line1 &&
      input !== city.properties?.address_line1
    )
      setInput(city.properties?.address_line1);
  }, [city]);

  return (
    <div className={classNames(className, 'max-w-[524px] relative', 'fade-in')}>
      <div className="flex items-center">
        <span className="w-8 h-8 min-w-8 #263238">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.028 21.474l.047-.027c.987-.565 3.017-1.944 4.78-3.932C18.625 15.52 20 13.056 20 10.28c0-4.264-3.549-7.78-8-7.78-4.452 0-8 3.516-8 7.78 0 2.776 1.376 5.24 3.145 7.235 1.763 1.988 3.793 3.367 4.78 3.932l.047.027.028.018.028-.018zm.792 1.274a1.463 1.463 0 01-1.64 0C9 21.5 2.5 16.85 2.5 10.28 2.5 5.155 6.753 1 12 1s9.5 4.155 9.5 9.28c0 6.57-6.5 11.22-8.68 12.468z"
              className="Icon-fill-color"
              stroke="transparent"
            ></path>
            <path
              d="M14 10.5a2 2 0 11-4 0 2 2 0 014 0z"
              className="Icon-fill-color"
              stroke="transparent"
            ></path>
          </svg>
        </span>

        <input
          className="z-10 geoapify-autocomplete-input"
          value={input}
          placeholder={`Search by city`}
          onKeyUp={(e: React.FormEvent<HTMLInputElement>) => {
            clearTimeout(deleteTimeout);
            const { value } = e.currentTarget;
            deleteTimeout = setTimeout(() => {
              doneTyping(value);
            }, 100);
          }}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setInput(e.currentTarget.value);
            openList(e.currentTarget.value);
          }}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            openList(e.currentTarget.value);
          }}
        />
        <div
          className={`geoapify-close-button ${open ? 'visible' : 1}`}
          onClick={() => {
            init();
          }}
        >
          <svg viewBox="0 0 24 24" height="24">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {open && cities && cities.length > 0 && (
          <div className="geoapify-autocomplete-items !mt-2 z-10">
            {cities.map((val, i) => (
              <LocationListItem
                key={'location-item-' + i}
                item={val}
                filter={input}
                onClick={() => onLocationSelect(val)}
              />
            ))}
          </div>
        )}

        {open && (
          <div
            className="fixed top-0 left-0 z-0 w-screen h-screen"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
      <div className="h-[2px] mt-3 background-gradient"></div>
    </div>
  );
};

export default SearchByCity;
