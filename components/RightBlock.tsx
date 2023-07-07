import Link from 'next/link';
import SearchByCity from '@/components/SearchByCity';
import SearchNeighborHood from '@/components/SearchNeighborHood';
import { classNames } from '@/utils/utils';

interface Props {
  className: string;
  step: number;
}

const RightBlock = ({ className, step }: Props) => {
  return (
    <div className={classNames(className, 'flex flex-col justify-between')}>
      <div className="h-[104px] pr-10 justify-end items-center flex">
        <button className="h-[36px] px-[16px] inline-flex items-center justify-center bg-[#eceff1] rounded-lg hover:bg-[#cfd8dc] text-[12px] leading-[12px] font-[600]">
          Exit
        </button>
      </div>

      <div className="flex justify-center px-10">
        {step === 0 ? (
          <SearchByCity className="flex-1" />
        ) : step === 1 ? (
          <SearchNeighborHood className="flex-1" />
        ) : (
          <h1 className="text-3xl">Completed!</h1>
        )}
      </div>

      <div className="bg-white bottom-0 z-[2002]">
        <div className="relative flex-col">
          <div className="absolute bg-gray-200 h-[2px] w-[100%]"></div>
          <div
            className="absolute bg-blue-500 h-[2px]"
            style={{
              width: step === 2 ? '100%' : step === 1 ? '50%' : 0,
            }}
          ></div>
        </div>
        <div className="h-[96px] p-10 flex justify-between items-center">
          <div>
            {step > 0 && (
              <Link
                href={'/request-office/' + (step - 1 >= 0 ? step - 1 : 0)}
                className="h-[48px] px-[24px] inline-flex items-center justify-center relative overflow-hidden border border-gray-300 bg-white hover:bg-gray-300 text-black cursor-pointer rounded-lg text-[12px] leading-[12px] font-[600]"
              >
                Back
              </Link>
            )}
          </div>
          <div className="flex">
            {step < 2 ? (
              <Link
                href={'/request-office/' + (step + 1 < 2 ? step + 1 : 2)}
                className="h-[48px] px-[24px] inline-flex items-center justify-center relative overflow-hidden bg-[#0078ff] hover:bg-[#0043ce] text-white cursor-pointer rounded-lg text-[12px] leading-[12px] font-[600]"
              >
                Next
              </Link>
            ) : (
              <button className="h-[48px] px-[24px] inline-flex items-center justify-center relative overflow-hidden bg-[#0078ff] hover:bg-[#0043ce] text-white cursor-pointer rounded-lg text-[12px] leading-[12px] font-[600]">
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBlock;
