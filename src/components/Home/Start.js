import pageArt from '../../graphics/startPageArt.jpg';

export default function Start() {
  return (
    <>
      <h1 className="start-page-title">Blowback</h1>
      <hr />
      <h2 className="no-count start-page-subtitle">
        Miniatures Wargame System
      </h2>
      <img src={pageArt} alt="" className="page-art" />
    </>
  );
}
