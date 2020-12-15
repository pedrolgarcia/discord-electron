import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="mcprestes" />
            <UserRow nickname="Letícia" />

            <Role>Offline - 1</Role>
            <UserRow nickname="Chronon" isBot />
            <UserRow nickname="Davico" />
            <UserRow nickname="Victor" />
            <UserRow nickname="Joe" />
            <UserRow nickname="Matheus" />
        </Container>
    );
};

export default UserList;
