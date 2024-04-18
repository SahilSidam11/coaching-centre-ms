import { SignupProps } from "../../interface";

export const Input = (props: SignupProps) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.name}
      </label>
      <div className="mt-2">
        <input
          id={props.id}
          name={props.id}
          type={props.type}
          autoComplete={props.autoComplete}
          required
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition ease-out delay-100 duration-300 focus:outline-none hover:ring-2 hover:ring-inset hover:ring-indigo-500"
        />
      </div>
    </div>
  );
};
