import CrudForm from "../components/CrudForm";
import CrudTable from "../components/CrudTable";

const CrudMovies = ({ props }) => {
  return (
    <div className="page-crud">
      <CrudForm />
      <CrudTable />
    </div>
  );
};

export default CrudMovies;
