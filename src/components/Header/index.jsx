import { Container, Profile } from "./style";

export function Header(){
    return (
        <Container>
            <Profile>
                <img src="https://github.com/MatheusToledo246.png"
                alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Matheus Toledo</strong>
                </div>
            </Profile>

        </Container>
    );
}