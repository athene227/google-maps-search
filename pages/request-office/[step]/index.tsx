import { useEffect, useState } from 'react';

import LeftBlock from '@/components/LeftBlock';
import LocationProvider from '@/context/LocationContext';
import RightBlock from '@/components/RightBlock';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState<number>(Number(router.query.step));

  useEffect(() => {
    if (router?.query?.step && step !== Number(router.query.step))
      setStep(Number(router.query.step));
  }, [router, step]);

  return (
    <LocationProvider>
      <div className="flex w-screen h-screen">
        <LeftBlock className="flex-1" step={step} />
        <RightBlock className="flex-1" step={step} />
      </div>
    </LocationProvider>
  );
}
