export function Category({
  title,
  data,
}: {
  title: string | undefined;
  data: string | undefined;
}) {
  return (
    <div
      class="flex flex-col justify-center bg-slate-200 p-2 rounded-md aspect-square drop-shadow-md w-full h-full
    "
    >
      <p
        class="flex bg-slate-100 pl-2 pr-2 rounded-md w-fit justify-center drop-shadow-sm self-center text-lg content-center min-h-10 text-slate-900
        "
      >
        {title}
      </p>
      <p
        class="flex bg-slate-100 p-2 m-2 rounded-md w-1/3 justify-center drop-shadow-sm self-center text-sm content-center text-slate-900
        "
      >
        {data}
      </p>
    </div>
  );
}
