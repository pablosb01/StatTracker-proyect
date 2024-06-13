import { MatchComplete } from "./MatchComplete";

export function MatchHistory() {

  
  return (
    <>
    <div className="mx-auto hidden xl:block prueba bg-gray-300 rounded-lg h-full w-3/5 overflow-hidden mx-62">
        <div className="flex items-center h-12 rounded-lg drop-shadow-md bg-gradient-to-r from-black to-red-900 border border-gray-300 hover:from-red-900 hover:to-black">
            <span className="text-left tracking-widest items-center p-1.5 pl-3  text-3xl text-white font-sans">MATCH HISTORY</span>
        </div>
        <div className="h-5/6">
            <MatchComplete puuid="Hng3HRgjI7CMrBDFH4jd6TS08gALhYD_muPm9JKN2bcwT_s-wOBumpfcrWeSXv7OVydqBXSRunlUsA"/>
            <MatchComplete puuid="HgBQup9MZhYkMyqcw8-HzEqxdL-u4JXfCjAsrTVMSYBTq2djY791__r-XOXx1vkgBXlNmgUvDLxp9Q"/>
            <MatchComplete puuid="Y2X9ZAnysEx5cxszvriWCL62y4Q5upG5-CFHafgqUgOgrAk1HHficYZRoOxcdN9bri4rMlcv8798bQ"/>
            <MatchComplete puuid="inxcpz8Bw4qzirO6sd0OPv4q3SnRzLV0ql4Q2XUq65aDRqfrjGwY3Sj54rr0W9qpvmTtINbI0VNITw"/>
            <MatchComplete puuid="qGVUmtCNCmGxJmD4F6iqT53Sca5IrHFfnvMDqOFtWvTiuuaHTszfpug7XaLUIbjEcl0amcrJtTeuuA"/>
            <MatchComplete puuid="gaHjFv0Kkg8f-saVWPIqUjE6Dcdnc3ohM6Ffvjq4Ud9NP7ynfzvl1tL0EwRKqGYkOYPAyjf_V-BLNA"/>
            <MatchComplete puuid="vnE1JAJyVlf08fJIwuo4zPMjIZZuvlChvEYsDPmMZbdT1Dbg0rmtDLUr1Z22TTfP4pHGEyT-FmbuPA"/>
            <MatchComplete puuid="FjXIt87aLFSWcVkZJhxiTyAgf90zeiz2yjiPQtxbmng8oYlFeqwS9ziS7-Er8NClXt2ephk_gS754g"/>            
        </div>
    </div>
      <div className="xl:hidden bg-gray-300 rounded-lg w-auto h-fit overflow-hidden">    {/*este w-fit cambia el ancho del contenedor */}
        <div className="flex items-center h-12 rounded-lg drop-shadow-md bg-gradient-to-r from-black to-red-900 border border-gray-300 hover:from-red-900 hover:to-black">
            <span className="text-left tracking-widest items-center p-1.5 pl-3  text-3xl text-white font-sans">MATCH HISTORY</span>
        </div>
        <div className="h-5/6">
            <MatchComplete puuid="Hng3HRgjI7CMrBDFH4jd6TS08gALhYD_muPm9JKN2bcwT_s-wOBumpfcrWeSXv7OVydqBXSRunlUsA"/>
            <MatchComplete puuid="HgBQup9MZhYkMyqcw8-HzEqxdL-u4JXfCjAsrTVMSYBTq2djY791__r-XOXx1vkgBXlNmgUvDLxp9Q"/>
            <MatchComplete puuid="Y2X9ZAnysEx5cxszvriWCL62y4Q5upG5-CFHafgqUgOgrAk1HHficYZRoOxcdN9bri4rMlcv8798bQ"/>
            <MatchComplete puuid="inxcpz8Bw4qzirO6sd0OPv4q3SnRzLV0ql4Q2XUq65aDRqfrjGwY3Sj54rr0W9qpvmTtINbI0VNITw"/>
            <MatchComplete puuid="qGVUmtCNCmGxJmD4F6iqT53Sca5IrHFfnvMDqOFtWvTiuuaHTszfpug7XaLUIbjEcl0amcrJtTeuuA"/>
            <MatchComplete puuid="gaHjFv0Kkg8f-saVWPIqUjE6Dcdnc3ohM6Ffvjq4Ud9NP7ynfzvl1tL0EwRKqGYkOYPAyjf_V-BLNA"/>
            <MatchComplete puuid="vnE1JAJyVlf08fJIwuo4zPMjIZZuvlChvEYsDPmMZbdT1Dbg0rmtDLUr1Z22TTfP4pHGEyT-FmbuPA"/>
            <MatchComplete puuid="FjXIt87aLFSWcVkZJhxiTyAgf90zeiz2yjiPQtxbmng8oYlFeqwS9ziS7-Er8NClXt2ephk_gS754g"/>            
        </div>
    </div>
</>
  )
}
