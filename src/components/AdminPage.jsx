import UploadForm from "./UploadForm";

function AdminPage() {
  return (
    <div className="">
      <h2 className="inter m-10 p-2 text-center text-2xl font-light">
        Panel de Administracion
      </h2>
      <div className="mx-24 my-10">
        <UploadForm />
      </div>
    </div>
  );
}

export default AdminPage;
