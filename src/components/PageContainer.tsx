const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 h-screen">{children}</div>
  );
};

export default PageContainer;
