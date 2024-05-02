async function fetchData() {

    const shard = 'eu'
    const puuid = 'pIdxN78Xf20QP_cQqeWpVzn_a0B3i43BwXE6gzgiD6AmSV8a1_qSMIBN_X4hyqkj_z8rRMPg37fR1w'
    
    try {
      const response = await fetch(`https://pd.${shard}.a.pvp.net/mmr/v1/players/${puuid}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  fetchData();
  

  //pIdxN78Xf20QP_cQqeWpVzn_a0B3i43BwXE6gzgiD6AmSV8a1_qSMIBN_X4hyqkj_z8rRMPg37fR1w