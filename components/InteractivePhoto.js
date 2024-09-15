import Image from 'next/image';

const InteractivePhoto = () => {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-54 md:h-54 mx-auto mt-[-50px]">
      <Image
        src="/Images/profile-photo.jpg"
        alt="Luis Fortes"
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default InteractivePhoto;