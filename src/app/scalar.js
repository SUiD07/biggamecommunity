// import { useEffect, useState } from 'react';

// export default function ScalarPage() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://mdcu.betich.workers.dev/scalar')
//       .then(res => {
//         if (!res.ok) throw new Error('Failed to fetch');
//         return res.json();
//       })
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Scalar API Data Structure</h1>
//       <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
//         {JSON.stringify(data, null, 2)}
//       </pre>
//     </div>
//   );
// }

