import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Manage your content, teams, and more from here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/posts"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-center"
          >
            POSTS
          </a>
          <a
            href="/tasks"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition text-center"
          >
            TASKS
          </a>
        </div>
      </div>
    </main>
  );
}
