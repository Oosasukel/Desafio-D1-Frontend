import { GetServerSideProps } from 'next';
import { EditUser } from 'pagesComponents/EditUser';

const EditUserPage = ({ id }) => <EditUser id={id} />;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: { id: params.id },
  };
};

export default EditUserPage;
