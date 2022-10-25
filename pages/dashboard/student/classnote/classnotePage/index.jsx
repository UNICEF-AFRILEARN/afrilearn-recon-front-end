import Head from 'next/head'
// import ClassnotePageComponent from "../../../../../components/features/dashboard/student/classnote/classnotePage";
import dynamic from 'next/dynamic'

const ClassnotePage = () => {
  const ClassnotePageComponents = dynamic(
    () =>
      import(
        '../../../../../components/features/dashboard/student/classnote/classnotePage'
      ),
    { ssr: false }
  )

  return (
    <>
      <Head>
        <title>Classnote | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <ClassnotePageComponents />
    </>
  )
}

export default ClassnotePage
