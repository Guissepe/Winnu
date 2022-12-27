import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }: { providers: any }) {
  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn('GitHub', { callbackUrl: 'https://winnu-gy46ce7m1-guissepe.vercel.app' })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
