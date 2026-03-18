export default function SectionCard({
  title,
  action,
  children,
}: {
  title: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 h-full flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

        {action}
      </div>

      {children}
    </div>
  );
}
