export default function Question(props: any) {
  return (
    <>
      <div className="flex flex-col w-full py-4 px-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40 hover:bg-slate-100">
        <div className="flex">
          <span className="w-10 h-10 justify-center align-middle p-2 mr-6 text-center text-white rounded-full bg-[#8f9efe]">
            {props.id}
          </span>
          <span className="text-md max-w-full">{props.description}</span>
        </div>
        <div className="ml-16">
          {props.type === "radio" || props.type === "checkbox" ? (
            props.options.map((option: any) => {
              return (
                <div className="flex">
                  <input type={props.type} name={props.id} value={option} />
                  <label htmlFor={option} className="ml-4 mb-1">
                    {option}
                  </label>
                </div>
              );
            })
          ) : (props.type === "textarea" ? (
            <div>
              <label className="mr-4">Answer: </label>
              <textarea
                name={props.id}
                className="bg-slate-200 hover:bg-white px-2 py-1 rounded-md text-slate-700"
              />
            </div>
          ) : (
            <div>
              {" "}
              <label className="mr-4">Answer: </label>
              <input
                type={props.type}
                name={props.id}
                className="bg-slate-200 hover:bg-white px-2 py-1 rounded-md text-slate-700"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
