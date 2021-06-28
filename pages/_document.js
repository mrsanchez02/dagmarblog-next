import Document, {Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    
    static async getInitialProps(ctx){
        const initalProps = await Document.getInitialProps(ctx)
        return {...initalProps}
    }

    render() {
        return (
            <Html lang='es' className='container'>
                <Head>
                    <body>
                        <Main/>
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}

export default MyDocument;