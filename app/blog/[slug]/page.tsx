type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

export default function Page({ params }: Params) {
  return <>
      <h1>Slug: {params.slug}</h1>
      <h2>Liverpool Fc</h2>
      <p>NguyễnTrungKiênVàMaiThịThanhThúy</p>
      <p>PIVOT AND WOLF SOLUTIONS</p>
  </>
}
