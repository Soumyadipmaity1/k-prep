
import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <div className="  text-black text-2xl font-bold  p-6">
      <nav>
        <ul className="space-y-4">
          {/* <li>
            <Link href="/" className="hover:text-fuchsia-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/add-year-semester" className="hover:text-fuchsia-300">
              Add Year & Semester
            </Link>
          </li>
          <li>
            <Link href="/add-branch" className="hover:text-fuchsia-300">
              Add Branch
            </Link>
          </li> */}
          <li>
            <Link href="/login/admin/add-note" className="hover:underline">
              Add Note
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
