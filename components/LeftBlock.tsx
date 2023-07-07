import { classNames } from '@/utils/utils';

interface Props {
  className: string;
  step: number;
}

const LeftBlock = ({ className, step }: Props) => {
  return (
    <div
      className={classNames(
        className,
        'relative background-gradient flex items-center justify-center'
      )}
    >
      <div className="absolute left-10 top-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="30"
          viewBox="0 0 75 30"
          fill="white"
        >
          <g className="Icon-fill-color">
            <path d="M44.447 19.192c0-4.14 2.385-7.912 6.126-9.688 3.74-1.777 8.17-1.24 11.38 1.377V2.26h.019c-.11-.766.238-1.526.889-1.944.65-.418 1.486-.418 2.137 0 .65.418.998 1.178.888 1.944h.016v16.8c.003.042.004.086.004.13 0 .067-.004.135-.01.203-.134 5.865-4.956 10.535-10.823 10.48-5.867-.054-10.6-4.813-10.626-10.68zm3.95 0c0 3.742 3.034 6.776 6.776 6.776s6.775-3.034 6.775-6.776c0-3.741-3.033-6.775-6.775-6.775-3.742.001-6.774 3.034-6.776 6.775zM31.462 8.467c-5.923 0-10.725 4.803-10.725 10.726 0 5.924 4.802 10.726 10.726 10.726 5.923 0 10.725-4.802 10.725-10.726 0-5.923-4.802-10.726-10.726-10.726zm0 17.501c-3.741 0-6.775-3.033-6.774-6.775 0-3.742 3.033-6.775 6.775-6.775 3.742 0 6.775 3.033 6.775 6.775 0 3.742-3.034 6.775-6.776 6.775zM0 19.192c0-4.286 2.552-8.16 6.49-9.854 3.938-1.692 8.505-.878 11.616 2.071l-.013.004c.525.498.735 1.243.548 1.942-.187.699-.742 1.239-1.445 1.408-.704.169-1.443-.06-1.927-.598-2.725-2.466-6.919-2.31-9.454.35-2.534 2.662-2.485 6.858.11 9.46 2.596 2.602 6.792 2.66 9.46.131l.038.042c.358-.337.831-.525 1.323-.525 1.096.013 1.974.913 1.961 2.01.005.786-.45 1.504-1.164 1.836-3.203 2.639-7.641 3.192-11.394 1.422C2.395 27.12 0 23.343 0 19.193zM70.647 27.962c0-.1.007-.202.023-.302h-.023V10.453c0-1.092.887-1.976 1.979-1.975 1.092.001 1.976.887 1.975 1.98 0 .043-.002.087-.004.13V27.66h-.019c.112.733-.196 1.467-.798 1.9-.6.434-1.394.495-2.055.158-.66-.337-1.077-1.015-1.078-1.757z"></path>
            <circle cx="72.624" cy="4.19" r="2.139"></circle>
          </g>
        </svg>
      </div>

      {step === 0 ? (
        <div className="px-10 max-w-[652px]">
          <p className="text-[48px] leading-[58px] -tracking-[.01em] font-[900] text-white">
            Where would you like your office?
          </p>
          <div className="mt-6">
            <p className="text-[2rem] leading-[38px] font-normal text-white">
              We deliver the best offices with the most flexible terms —
              nationwide.
            </p>
          </div>
        </div>
      ) : (
        <div className="px-10 max-w-[652px]">
          <p className="text-[48px] leading-[58px] -tracking-[.01em] font-[900] text-white">
            Which neighborhoods do you prefer?
          </p>
          <div className="mt-6">
            <p className="text-[2rem] leading-[38px] font-normal text-white">
              The more you choose, the wider the selection.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftBlock;
