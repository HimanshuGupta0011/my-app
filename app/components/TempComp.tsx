export default function TempComp({ content }: { content: string }) {
  return (
    <div className="absolute h-[100vh] w-[40%] top-0 flex flex-col justify-center px-[5rem] z-[-1]">
      <h1 className="text-3xl">{`This is ${content}`}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magnam
        quos, vero minima autem aperiam optio accusantium consectetur obcaecati
        porro animi quibusdam id exercitationem? Eum alias nobis possimus unde
        non eaque ratione?
      </p>
    </div>
  );
}
