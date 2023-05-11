import pageArt from '../../graphics/startPageArt.jpg';

export default function Start() {
  return (
    <>
      <h1 className="start-page-title">Blowback</h1>
      <hr />
      <h3 className="no-count start-page-subtitle">
        Miniatures Wargame System
      </h3>
      <img src={pageArt} alt="" className="page-art" />
    </>
  );
}
