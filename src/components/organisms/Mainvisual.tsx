export const Mainvisual: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-60vh min-h-400 lg:h-80vh max-h-900 bg-gray-900">
      <div className="pointer-events-none text-center">
        <div>
          <h1 aria-label="Ria">
            <img
              className="mx-auto w-80px lg:w-140px mb-8"
              src="/mainvisual/ria.svg"
              width="140"
              height="80.915438337"
              alt="Ria"
            />
          </h1>
        </div>
        <div>
          <img
            className="mx-auto w-280px lg:w-400px"
            src="/mainvisual/caption.svg"
            width="400"
            height="45.175838928"
            alt="Front-end Engineer."
          />
        </div>
      </div>
    </div>
  )
}
