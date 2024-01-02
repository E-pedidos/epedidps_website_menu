
export const Information = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        bg-white
        rounded-t-3xl
        flex 
        items-center 
        justify-evenly 
        w-screen
        h-32
        p-4
        "
    >
      {children}
    </div>
  );
};
