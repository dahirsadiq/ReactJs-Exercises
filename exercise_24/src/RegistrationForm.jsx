import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Registration successful!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Student Registration
        </h2>

        {/* Student Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Name
          </label>
          <input
            type="text"
            placeholder="Enter Student Name"
            {...register("Name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          {errors.Name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.Name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Grade Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grade Level
          </label>
          <select
            {...register("gradeLevel", {
              required: "Please select a grade",
            })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gradeLevel.message}
            </p>
          )}
        </div>

        {/* Subjects */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subjects
          </label>
          <div className="space-y-2">
            {["math", "science", "english"].map((subject) => (
              <label
                key={subject}
                className="flex items-center text-gray-700"
              >
                <input
                  type="checkbox"
                  value={subject}
                  {...register("subjects", {
                    required: "Select at least one subject",
                  })}
                  className="mr-2 accent-rose-500"
                />
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </label>
            ))}
          </div>
          {errors.subjects && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subjects.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded-lg font-medium hover:bg-rose-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
